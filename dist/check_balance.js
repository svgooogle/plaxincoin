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
const dotenv = __importStar(require("dotenv"));
dotenv.config();
async function main() {
    try {
        // Connect to Solana network (devnet for testing)
        const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'), 'confirmed');
        // Get public key from private key in .env
        if (!process.env.PRIVATE_KEY) {
            throw new Error('Missing PRIVATE_KEY in .env file');
        }
        const publicKey = '9zAd8kb9BNxJxHa6RUwhdZCubjekXTw4gvXSTW6fh5RB';
        // Get balance
        const balance = await connection.getBalance(new web3_js_1.PublicKey(publicKey));
        console.log(`Wallet address: ${publicKey}`);
        console.log(`Balance: ${balance / web3_js_1.LAMPORTS_PER_SOL} SOL`);
        if (balance === 0) {
            console.log('\nYour wallet needs SOL to create a token.');
            console.log('Get test SOL from: https://solfaucet.com');
            console.log('Copy and paste your wallet address there:', publicKey);
        }
    }
    catch (error) {
        console.error('Error checking balance:', error);
    }
}
main();
