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
const spl_token_1 = require("@solana/spl-token");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
async function main() {
    try {
        // Подключаемся к сети Solana devnet
        const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'), 'confirmed');
        // Адрес токена PLAXIN
        const mintAddress = new web3_js_1.PublicKey('Ah3HgXqKUH3rwMUhh8W7sTi3WRiS4xgGRg5fJ4WM3otT');
        // Адреса кошельков для проверки
        const wallets = [
            '9zAd8kb9BNxJxHa6RUwhdZCubjekXTw4gvXSTW6fh5RB', // Ваш основной кошелек
            '2omJFAwMJKVTriyzPh3ST1ZgeWbDofMb7zmxWFJgoJNz', // Ваш Phantom кошелек
            'CFQdGcxEKE8kZdnU2T9gzXTL3WpyhGq5tn1oCMBRKS3e' // Новый кошелек
        ];
        console.log('Проверка балансов PLAXIN токена:\n');
        for (const walletAddress of wallets) {
            try {
                const wallet = new web3_js_1.PublicKey(walletAddress);
                const tokenAddress = await (0, spl_token_1.getAssociatedTokenAddress)(mintAddress, wallet);
                try {
                    const account = await (0, spl_token_1.getAccount)(connection, tokenAddress);
                    console.log(`Кошелек ${walletAddress}:`);
                    console.log(`Баланс: ${Number(account.amount)} PLAXIN\n`);
                }
                catch (e) {
                    console.log(`Кошелек ${walletAddress}:`);
                    console.log('Токены еще не были получены или аккаунт не создан\n');
                }
            }
            catch (e) {
                console.error(`Ошибка при проверке кошелька ${walletAddress}:`, e);
            }
        }
    }
    catch (error) {
        console.error('Ошибка:', error);
    }
}
main();
