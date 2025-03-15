import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js';

async function checkBalance() {
  try {
    // Подключаемся к mainnet-beta
    const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

    // Адрес Solflare кошелька
    const walletAddress = new PublicKey('CFQdGcxEKE8kZdnU2T9gzXTL3WpyhGq5tn1oCMBRKS3e');

    // Получаем баланс
    const balance = await connection.getBalance(walletAddress);
    console.log('Solflare wallet address:', walletAddress.toString());
    console.log('Balance:', balance / LAMPORTS_PER_SOL, 'SOL');

  } catch (error) {
    console.error('Error checking balance:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
  }
}

checkBalance(); 