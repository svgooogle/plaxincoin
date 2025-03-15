import { Connection, Keypair, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js';
import * as dotenv from 'dotenv';

dotenv.config();

async function checkBalance() {
  try {
    // Подключаемся к mainnet-beta
    const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

    // Загружаем приватный ключ
    if (!process.env.PRIVATE_KEY) {
      throw new Error('Missing PRIVATE_KEY in .env file');
    }
    const secretKey = Buffer.from(process.env.PRIVATE_KEY, 'base64');
    const wallet = Keypair.fromSecretKey(secretKey);

    // Получаем баланс
    const balance = await connection.getBalance(wallet.publicKey);
    console.log('Wallet address:', wallet.publicKey.toString());
    console.log('Balance:', balance / LAMPORTS_PER_SOL, 'SOL');

  } catch (error) {
    console.error('Error checking balance:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
  }
}

checkBalance(); 