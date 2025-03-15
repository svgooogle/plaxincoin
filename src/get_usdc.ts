import { Connection, Keypair, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, getAssociatedTokenAddress } from '@solana/spl-token';
import * as dotenv from 'dotenv';

dotenv.config();

async function getDevnetUSDC() {
  try {
    // Подключаемся к Solana devnet
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Загружаем приватный ключ
    if (!process.env.PRIVATE_KEY) {
      throw new Error('Missing PRIVATE_KEY in .env file');
    }
    const secretKey = Buffer.from(process.env.PRIVATE_KEY, 'base64');
    const wallet = Keypair.fromSecretKey(secretKey);

    // USDC devnet address
    const usdcMint = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');

    // Сначала запрашиваем SOL для комиссий
    console.log('Requesting SOL airdrop...');
    const signature = await connection.requestAirdrop(wallet.publicKey, LAMPORTS_PER_SOL);
    await connection.confirmTransaction(signature);
    console.log('Получили 1 SOL для комиссий');

    // Получаем адрес ассоциированного токен аккаунта
    const associatedTokenAddress = await getAssociatedTokenAddress(
      usdcMint,
      wallet.publicKey
    );

    console.log('\nИнструкции для получения тестовых USDC:');
    console.log('1. Перейдите на https://spl-token-faucet.com/');
    console.log('2. Подключите ваш кошелек');
    console.log('3. Выберите USDC и запросите токены');
    console.log('\nВаш USDC аккаунт:', associatedTokenAddress.toString());
    console.log('Баланс SOL:', await connection.getBalance(wallet.publicKey) / LAMPORTS_PER_SOL, 'SOL');

  } catch (error) {
    console.error('Error:', error);
  }
}

getDevnetUSDC(); 