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
exports.PlaxinToken = void 0;
const web3_js_1 = require("@solana/web3.js");
const spl_token_1 = require("@solana/spl-token");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class PlaxinToken {
    constructor(connection, payer) {
        this.connection = connection;
        this.payer = payer;
        this.mint = null;
    }
    setMint(mintAddress) {
        this.mint = new web3_js_1.PublicKey(mintAddress);
    }
    async createToken(decimals = 9) {
        try {
            // Create new token mint
            this.mint = await (0, spl_token_1.createMint)(this.connection, this.payer, this.payer.publicKey, this.payer.publicKey, decimals);
            console.log(`Token created successfully. Mint address: ${this.mint.toBase58()}`);
            return this.mint;
        }
        catch (error) {
            console.error('Error creating token:', error);
            throw error;
        }
    }
    async mintTokens(recipient, amount) {
        if (!this.mint) {
            throw new Error('Token mint not initialized');
        }
        try {
            // Get or create associated token account for recipient
            const recipientAccount = await (0, spl_token_1.getOrCreateAssociatedTokenAccount)(this.connection, this.payer, this.mint, recipient);
            // Mint tokens to recipient
            await (0, spl_token_1.mintTo)(this.connection, this.payer, this.mint, recipientAccount.address, this.payer, amount);
            console.log(`Successfully minted ${amount} tokens to ${recipient.toBase58()}`);
        }
        catch (error) {
            console.error('Error minting tokens:', error);
            throw error;
        }
    }
    async transferTokens(sender, recipient, amount) {
        if (!this.mint) {
            throw new Error('Token mint not initialized');
        }
        try {
            // Get or create associated token accounts
            const senderAccount = await (0, spl_token_1.getOrCreateAssociatedTokenAccount)(this.connection, this.payer, this.mint, sender.publicKey);
            const recipientAccount = await (0, spl_token_1.getOrCreateAssociatedTokenAccount)(this.connection, this.payer, this.mint, recipient);
            // Transfer tokens
            await (0, spl_token_1.transfer)(this.connection, this.payer, senderAccount.address, recipientAccount.address, sender, amount);
            console.log(`Successfully transferred ${amount} tokens from ${sender.publicKey.toBase58()} to ${recipient.toBase58()}`);
        }
        catch (error) {
            console.error('Error transferring tokens:', error);
            throw error;
        }
    }
}
exports.PlaxinToken = PlaxinToken;
