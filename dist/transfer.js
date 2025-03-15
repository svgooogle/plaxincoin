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
        // Подключаемся к сети Solana devnet
        const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'), 'confirmed');
        // Загружаем приватный ключ из .env
        if (!process.env.PRIVATE_KEY) {
            throw new Error('Missing PRIVATE_KEY in .env file');
        }
        // Создаем keypair из приватного ключа
        const secretKey = Buffer.from(process.env.PRIVATE_KEY, 'base64');
        const payer = web3_js_1.Keypair.fromSecretKey(secretKey);
        // Инициализируем наш токен
        const plaxinToken = new token_1.PlaxinToken(connection, payer);
        // Адрес получателя
        const recipientAddress = 'CFQdGcxEKE8kZdnU2T9gzXTL3WpyhGq5tn1oCMBRKS3e';
        // Количество токенов для перевода (100000 токенов)
        const amount = 100000;
        // Устанавливаем mint address нашего токена
        plaxinToken.setMint('Ah3HgXqKUH3rwMUhh8W7sTi3WRiS4xgGRg5fJ4WM3otT');
        // Выполняем перевод
        await plaxinToken.transferTokens(payer, new web3_js_1.PublicKey(recipientAddress), amount);
        console.log(`Successfully transferred ${amount} PLAXIN tokens to ${recipientAddress}`);
    }
    catch (error) {
        console.error('Error transferring tokens:', error);
    }
}
main();
