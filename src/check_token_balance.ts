import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { getAccount, getAssociatedTokenAddress } from '@solana/spl-token';
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  try {
    // Подключаемся к сети Solana devnet
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Адрес токена PLAXIN
    const mintAddress = new PublicKey('Ah3HgXqKUH3rwMUhh8W7sTi3WRiS4xgGRg5fJ4WM3otT');

    // Адреса кошельков для проверки
    const wallets = [
      '9zAd8kb9BNxJxHa6RUwhdZCubjekXTw4gvXSTW6fh5RB', // Ваш основной кошелек
      '2omJFAwMJKVTriyzPh3ST1ZgeWbDofMb7zmxWFJgoJNz',  // Ваш Phantom кошелек
      'CFQdGcxEKE8kZdnU2T9gzXTL3WpyhGq5tn1oCMBRKS3e'   // Новый кошелек
    ];

    console.log('Проверка балансов PLAXIN токена:\n');

    for (const walletAddress of wallets) {
      try {
        const wallet = new PublicKey(walletAddress);
        const tokenAddress = await getAssociatedTokenAddress(mintAddress, wallet);
        
        try {
          const account = await getAccount(connection, tokenAddress);
          console.log(`Кошелек ${walletAddress}:`);
          console.log(`Баланс: ${Number(account.amount)} PLAXIN\n`);
        } catch (e) {
          console.log(`Кошелек ${walletAddress}:`);
          console.log('Токены еще не были получены или аккаунт не создан\n');
        }
      } catch (e) {
        console.error(`Ошибка при проверке кошелька ${walletAddress}:`, e);
      }
    }
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

main(); 