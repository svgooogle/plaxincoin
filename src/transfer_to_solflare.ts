import { Connection, Keypair, PublicKey, Transaction, clusterApiUrl } from '@solana/web3.js';
import { getAssociatedTokenAddress, createTransferInstruction, getAccount, createAssociatedTokenAccountInstruction } from '@solana/spl-token';
import * as dotenv from 'dotenv';

dotenv.config();

async function transferTokens() {
  try {
    // Подключаемся к Solana
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Загружаем приватный ключ отправителя
    if (!process.env.PRIVATE_KEY) {
      throw new Error('Missing PRIVATE_KEY in .env file');
    }
    const secretKey = Buffer.from(process.env.PRIVATE_KEY, 'base64');
    const fromWallet = Keypair.fromSecretKey(secretKey);

    // Адрес кошелька Solflare
    const toWalletAddress = new PublicKey('CFQdGcxEKE8kZdnU2T9gzXTL3WpyhGq5tn1oCMBRKS3e');

    // Адреса токенов
    const plaxTokenMint = new PublicKey('Ah3HgXqKUH3rwMUhh8W7sTi3WRiS4xgGRg5fJ4WM3otT');
    const usdcTokenMint = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');

    // Получаем адреса ассоциированных токен-аккаунтов отправителя
    const fromPlaxAccount = await getAssociatedTokenAddress(plaxTokenMint, fromWallet.publicKey);
    const fromUsdcAccount = await getAssociatedTokenAddress(usdcTokenMint, fromWallet.publicKey);

    // Получаем адреса ассоциированных токен-аккаунтов получателя
    const toPlaxAccount = await getAssociatedTokenAddress(plaxTokenMint, toWalletAddress);
    const toUsdcAccount = await getAssociatedTokenAddress(usdcTokenMint, toWalletAddress);

    // Создаем токен-аккаунты получателя, если они не существуют
    try {
      const createPlaxAccountIx = createAssociatedTokenAccountInstruction(
        fromWallet.publicKey,
        toPlaxAccount,
        toWalletAddress,
        plaxTokenMint
      );
      const createUsdcAccountIx = createAssociatedTokenAccountInstruction(
        fromWallet.publicKey,
        toUsdcAccount,
        toWalletAddress,
        usdcTokenMint
      );

      const setupTx = new Transaction().add(createPlaxAccountIx, createUsdcAccountIx);
      const setupSignature = await connection.sendTransaction(setupTx, [fromWallet]);
      await connection.confirmTransaction(setupSignature);
      console.log('Created token accounts for recipient');
    } catch (e) {
      console.log('Token accounts already exist for recipient');
    }

    // Получаем балансы
    const plaxBalance = (await getAccount(connection, fromPlaxAccount)).amount;
    const usdcBalance = (await getAccount(connection, fromUsdcAccount)).amount;

    console.log('Current balances:');
    console.log('PLAX:', plaxBalance.toString());
    console.log('USDC:', usdcBalance.toString());

    // Создаем и отправляем транзакции для перевода PLAX
    console.log('Transferring PLAX tokens...');
    const transferPlaxIx = createTransferInstruction(
      fromPlaxAccount,
      toPlaxAccount,
      fromWallet.publicKey,
      plaxBalance
    );
    
    let transaction = new Transaction();
    transaction.add(transferPlaxIx);
    
    let signature = await connection.sendTransaction(
      transaction,
      [fromWallet]
    );
    await connection.confirmTransaction(signature);
    console.log('PLAX transfer signature:', signature);

    // Создаем и отправляем транзакции для перевода USDC
    console.log('Transferring USDC tokens...');
    const transferUsdcIx = createTransferInstruction(
      fromUsdcAccount,
      toUsdcAccount,
      fromWallet.publicKey,
      usdcBalance
    );

    transaction = new Transaction();
    transaction.add(transferUsdcIx);
    
    signature = await connection.sendTransaction(
      transaction,
      [fromWallet]
    );
    await connection.confirmTransaction(signature);
    console.log('USDC transfer signature:', signature);

    console.log('Transfers completed successfully!');
    console.log('Tokens transferred to:', toWalletAddress.toString());

  } catch (error) {
    console.error('Error transferring tokens:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
  }
}

transferTokens(); 