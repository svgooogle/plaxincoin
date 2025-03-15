import { Connection, Keypair, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import * as dotenv from 'dotenv';

dotenv.config();

async function checkUSDCBalance() {
  try {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    if (!process.env.PRIVATE_KEY) {
      throw new Error('Missing PRIVATE_KEY in .env file');
    }
    const secretKey = Buffer.from(process.env.PRIVATE_KEY, 'base64');
    const wallet = Keypair.fromSecretKey(secretKey);

    // USDC devnet address
    const usdcMint = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');

    // Получаем все токен аккаунты для кошелька
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(wallet.publicKey, {
      programId: TOKEN_PROGRAM_ID,
    });

    console.log('\nПоиск USDC аккаунтов...');
    
    let found = false;
    for (const { pubkey, account } of tokenAccounts.value) {
      const parsedAccount = account.data.parsed;
      const mint = parsedAccount.info.mint;
      
      if (mint === usdcMint.toString()) {
        found = true;
        console.log('Найден USDC аккаунт:');
        console.log('Адрес кошелька:', wallet.publicKey.toString());
        console.log('Адрес токен аккаунта:', pubkey.toString());
        console.log('Баланс:', Number(parsedAccount.info.tokenAmount.amount) / 1000000, 'USDC');
      }
    }

    if (!found) {
      console.log('USDC аккаунт не найден или баланс равен 0');
    }

  } catch (error: any) {
    console.error('Error:', error);
  }
}

checkUSDCBalance(); 