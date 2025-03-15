import { Keypair } from '@solana/web3.js';
import * as fs from 'fs';

// Generate new keypair
const keypair = Keypair.generate();

// Get wallet credentials
const publicKey = keypair.publicKey.toBase58();
const privateKey = Buffer.from(keypair.secretKey).toString('base64');

// Save private key to .env file
const envContent = `# Your wallet private key in base64 format
PRIVATE_KEY=${privateKey}

# Network to deploy to (mainnet-beta, testnet, or devnet)
SOLANA_NETWORK=devnet

# RPC URL (optional - will use public endpoints if not specified)
RPC_URL=`;

fs.writeFileSync('.env', envContent);

console.log('New wallet created successfully!');
console.log('Public Key:', publicKey);
console.log('Private Key has been saved to .env file');
console.log('\nIMPORTANT: Save these credentials in a secure place!');
console.log('You will need SOL in this wallet to deploy your token.');
console.log(`You can get test SOL from https://solfaucet.com/ by entering your public key: ${publicKey}`); 