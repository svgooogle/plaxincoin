import { Connection, Keypair, PublicKey } from '@solana/web3.js';
export declare class PlaxinToken {
    private connection;
    private payer;
    private mint;
    constructor(connection: Connection, payer: Keypair);
    setMint(mintAddress: string): void;
    createToken(decimals?: number): Promise<PublicKey>;
    mintTokens(recipient: PublicKey, amount: number): Promise<void>;
    transferTokens(sender: Keypair, recipient: PublicKey, amount: number): Promise<void>;
}
