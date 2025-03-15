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
const token_1 = require("./token");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
async function main() {
    try {
        // Connect to Solana network (devnet for testing)
        const network = (process.env.SOLANA_NETWORK || 'devnet');
        const endpoint = process.env.RPC_URL || (0, web3_js_1.clusterApiUrl)(network);
        const connection = new web3_js_1.Connection(endpoint, 'confirmed');
        // Load wallet keypair
        if (!process.env.PRIVATE_KEY) {
            throw new Error('Missing PRIVATE_KEY in .env file');
        }
        const secretKey = Buffer.from(process.env.PRIVATE_KEY, 'base64');
        const payer = web3_js_1.Keypair.fromSecretKey(secretKey);
        console.log(`Using wallet address: ${payer.publicKey.toBase58()}`);
        // Initialize PlaxinToken
        const plaxinToken = new token_1.PlaxinToken(connection, payer);
        // Create the token
        const mintAddress = await plaxinToken.createToken(9); // 9 decimals like most tokens
        console.log(`PLAXIN COIN token created successfully!`);
        console.log(`Mint address: ${mintAddress.toBase58()}`);
        // Mint some initial tokens to the creator's wallet (optional)
        const initialSupply = 1000000000; // 1 billion tokens
        await plaxinToken.mintTokens(payer.publicKey, initialSupply);
        console.log(`Minted ${initialSupply} tokens to ${payer.publicKey.toBase58()}`);
    }
    catch (error) {
        console.error('Error deploying token:', error);
        process.exit(1);
    }
}
main();
