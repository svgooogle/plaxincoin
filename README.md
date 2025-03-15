# PLAXIN COIN

A Solana token implementation with modern security standards.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Solana CLI tools
- A Solana wallet with some SOL for deployment

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create your environment file:
```bash
cp .env.example .env
```

3. Add your wallet's private key to the .env file:
- Export your private key from your wallet
- Convert it to base64
- Add it to the PRIVATE_KEY field in .env

## Development

1. Build the project:
```bash
npm run build
```

2. Deploy the token:
```bash
npm run deploy
```

## Security Features

- Secure token minting with authority controls
- Standard SPL Token implementation
- Protected admin functions
- Proper decimal handling (9 decimals)

## Testing

Run the test suite:
```bash
npm test
```

## Network Selection

The token can be deployed to:
- Solana Devnet (default)
- Solana Testnet
- Solana Mainnet

Change the network in your .env file by setting SOLANA_NETWORK.

## License

MIT 