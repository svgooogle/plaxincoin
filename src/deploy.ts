import { Connection, Keypair, PublicKey, clusterApiUrl, Cluster } from '@solana/web3.js';
import { PlaxinToken } from './token';
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  try {
    // Connect to Solana network (devnet for testing)
    const network = (process.env.SOLANA_NETWORK || 'devnet') as Cluster;
    const endpoint = process.env.RPC_URL || clusterApiUrl(network);
    const connection = new Connection(endpoint, 'confirmed');

    // Load wallet keypair
    if (!process.env.PRIVATE_KEY) {
      throw new Error('Missing PRIVATE_KEY in .env file');
    }

    const secretKey = Buffer.from(process.env.PRIVATE_KEY, 'base64');
    const payer = Keypair.fromSecretKey(secretKey);

    console.log(`Using wallet address: ${payer.publicKey.toBase58()}`);

    // Initialize PlaxinToken
    const plaxinToken = new PlaxinToken(connection, payer);

    // Create the token
    const mintAddress = await plaxinToken.createToken(9); // 9 decimals like most tokens
    console.log(`PLAXIN COIN token created successfully!`);
    console.log(`Mint address: ${mintAddress.toBase58()}`);
    
    // Mint some initial tokens to the creator's wallet (optional)
    const initialSupply = 1000000000; // 1 billion tokens
    await plaxinToken.mintTokens(payer.publicKey, initialSupply);
    console.log(`Minted ${initialSupply} tokens to ${payer.publicKey.toBase58()}`);
    
  } catch (error) {
    console.error('Error deploying token:', error);
    process.exit(1);
  }
}

main(); 