import { Connection, Keypair, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { PlaxinToken } from './token';
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  try {
    // Подключаемся к сети Solana devnet
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Загружаем приватный ключ из .env
    if (!process.env.PRIVATE_KEY) {
      throw new Error('Missing PRIVATE_KEY in .env file');
    }

    // Создаем keypair из приватного ключа
    const secretKey = Buffer.from(process.env.PRIVATE_KEY, 'base64');
    const payer = Keypair.fromSecretKey(secretKey);

    // Инициализируем наш токен
    const plaxinToken = new PlaxinToken(connection, payer);

    // Адрес получателя
    const recipientAddress = 'CFQdGcxEKE8kZdnU2T9gzXTL3WpyhGq5tn1oCMBRKS3e';
    
    // Количество токенов для перевода (100000 токенов)
    const amount = 100000;

    // Устанавливаем mint address нашего токена
    plaxinToken.setMint('Ah3HgXqKUH3rwMUhh8W7sTi3WRiS4xgGRg5fJ4WM3otT');

    // Выполняем перевод
    await plaxinToken.transferTokens(
      payer,
      new PublicKey(recipientAddress),
      amount
    );
    
    console.log(`Successfully transferred ${amount} PLAXIN tokens to ${recipientAddress}`);
  } catch (error) {
    console.error('Error transferring tokens:', error);
  }
}

main(); 