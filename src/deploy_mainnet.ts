import {
  Connection,
  Keypair,
  PublicKey,
} from '@solana/web3.js';
import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} from '@solana/spl-token';
import * as dotenv from 'dotenv';

dotenv.config();

async function deployToMainnet() {
  try {
    // Подключение к mainnet
    const connection = new Connection(process.env.SOLANA_MAINNET_RPC_URL || 'https://api.mainnet-beta.solana.com');

    // Загрузка кошелька
    const privateKey = process.env.WALLET_PRIVATE_KEY;
    if (!privateKey) throw new Error('Wallet private key not found in environment variables');
    const wallet = Keypair.fromSecretKey(new Uint8Array(JSON.parse(privateKey)));

    console.log('Deploying PLAXIN token to mainnet...');

    // Создание токена
    const decimals = 9;
    const mint = await createMint(
      connection,
      wallet,
      wallet.publicKey,
      wallet.publicKey,
      decimals
    );

    console.log('Token mint created:', mint.toBase58());

    // Создание аккаунта для токенов
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      wallet,
      mint,
      wallet.publicKey
    );

    // Минтим начальное предложение токенов
    const totalSupply = Number('1000000000') * Math.pow(10, decimals); // 1 billion tokens with 9 decimals
    await mintTo(
      connection,
      wallet,
      mint,
      tokenAccount.address,
      wallet,
      totalSupply
    );

    console.log('Initial supply minted:', totalSupply.toString());
    console.log('Token account:', tokenAccount.address.toBase58());
    console.log('Deployment complete!');

    return {
      mint: mint.toBase58(),
      tokenAccount: tokenAccount.address.toBase58(),
      totalSupply: totalSupply.toString(),
    };

  } catch (error) {
    console.error('Error deploying to mainnet:', error);
    throw error;
  }
}

export default deployToMainnet; 