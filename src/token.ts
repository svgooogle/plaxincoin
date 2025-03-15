import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL
} from '@solana/web3.js';
import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
  transfer,
  TOKEN_PROGRAM_ID,
  MINT_SIZE,
  getMinimumBalanceForRentExemptMint,
} from '@solana/spl-token';
import * as dotenv from 'dotenv';

dotenv.config();

export class PlaxinToken {
  private connection: Connection;
  private payer: Keypair;
  private mint: PublicKey | null;

  constructor(
    connection: Connection,
    payer: Keypair
  ) {
    this.connection = connection;
    this.payer = payer;
    this.mint = null;
  }

  setMint(mintAddress: string) {
    this.mint = new PublicKey(mintAddress);
  }

  async createToken(decimals: number = 9): Promise<PublicKey> {
    try {
      // Create new token mint
      this.mint = await createMint(
        this.connection,
        this.payer,
        this.payer.publicKey,
        this.payer.publicKey,
        decimals
      );

      console.log(`Token created successfully. Mint address: ${this.mint.toBase58()}`);
      return this.mint;
    } catch (error) {
      console.error('Error creating token:', error);
      throw error;
    }
  }

  async mintTokens(
    recipient: PublicKey,
    amount: number
  ): Promise<void> {
    if (!this.mint) {
      throw new Error('Token mint not initialized');
    }

    try {
      // Get or create associated token account for recipient
      const recipientAccount = await getOrCreateAssociatedTokenAccount(
        this.connection,
        this.payer,
        this.mint,
        recipient
      );

      // Mint tokens to recipient
      await mintTo(
        this.connection,
        this.payer,
        this.mint,
        recipientAccount.address,
        this.payer,
        amount
      );

      console.log(`Successfully minted ${amount} tokens to ${recipient.toBase58()}`);
    } catch (error) {
      console.error('Error minting tokens:', error);
      throw error;
    }
  }

  async transferTokens(
    sender: Keypair,
    recipient: PublicKey,
    amount: number
  ): Promise<void> {
    if (!this.mint) {
      throw new Error('Token mint not initialized');
    }

    try {
      // Get or create associated token accounts
      const senderAccount = await getOrCreateAssociatedTokenAccount(
        this.connection,
        this.payer,
        this.mint,
        sender.publicKey
      );

      const recipientAccount = await getOrCreateAssociatedTokenAccount(
        this.connection,
        this.payer,
        this.mint,
        recipient
      );

      // Transfer tokens
      await transfer(
        this.connection,
        this.payer,
        senderAccount.address,
        recipientAccount.address,
        sender,
        amount
      );

      console.log(
        `Successfully transferred ${amount} tokens from ${sender.publicKey.toBase58()} to ${recipient.toBase58()}`
      );
    } catch (error) {
      console.error('Error transferring tokens:', error);
      throw error;
    }
  }
} 