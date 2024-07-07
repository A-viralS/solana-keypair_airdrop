# Final Project - 

[Transaction Link]( https://explorer.solana.com/tx/5rxowDwgcvkYGUHXxjmDdxez3hdNd7TYpKtQcd2KtFKVbk4UrxhcMKfEhJrNE61cAHeSWn2e6xAWbX8hP15Amtc4?cluster=devnet)

## Description
In this project, we created a wallet, got an airdrop, and made our first transfer on the Solana network. For the final project, we interact with a program that WBA has created on the devnet, using PDAs (Program Derived Addresses) and IDLs (Interface Definition Languages).

## Files

### `programs/wba_prereq.ts`
This file contains the IDL (Interface Definition Language) for the WBA prerequisites program. It defines the program's structure, including the instructions, accounts, and types. The IDL is used to generate client-side code to interact with the program.

### `enroll.ts`
This script interacts with the WBA prerequisites program on the Solana devnet. It performs the following tasks:
1. Connects to the Solana devnet.
2. Creates a keypair from a secret key stored in `dev-wallet.json`.
3. Encodes the GitHub username as a UTF-8 buffer.
4. Creates an Anchor provider using the connection and wallet.
5. Initializes the WBA program using the provider and IDL.
6. Derives a PDA (Program Derived Address) for the account.
7. Submits a transaction to the WBA program, completing the prerequisite by sending the GitHub username and public key.

### `dev-wallet.json`
This file contains the secret key for the wallet used to interact with the Solana devnet. It is imported and used in `enroll.ts` to create a keypair.

## How to Run

1. **Install Dependencies**
   Ensure you have Node.js and Yarn installed. Then, run the following command to install the required dependencies:
   ```sh
   yarn install
   Add the dev-wallet.json file

2. Create a file named dev-wallet.json in the project directory and add your wallet's secret key as a JSON array.

3. yarn  enroll
