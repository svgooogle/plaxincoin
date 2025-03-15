import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  try {
    // Connect to Solana network (devnet for testing)
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Get public key from private key in .env
    if (!process.env.PRIVATE_KEY) {
      throw new Error('Missing PRIVATE_KEY in .env file');
    }

    const publicKey = '9zAd8kb9BNxJxHa6RUwhdZCubjekXTw4gvXSTW6fh5RB';

    // Get balance
    const balance = await connection.getBalance(new PublicKey(publicKey));
    console.log(`Wallet address: ${publicKey}`);
    console.log(`Balance: ${balance / LAMPORTS_PER_SOL} SOL`);

    if (balance === 0) {
      console.log('\nYour wallet needs SOL to create a token.');
      console.log('Get test SOL from: https://solfaucet.com');
      console.log('Copy and paste your wallet address there:', publicKey);
    }
  } catch (error) {
    console.error('Error checking balance:', error);
  }
}

main(); 