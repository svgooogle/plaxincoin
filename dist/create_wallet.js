"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const fs = __importStar(require("fs"));
// Generate new keypair
const keypair = web3_js_1.Keypair.generate();
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
