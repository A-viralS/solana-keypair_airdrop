import { Connection, Keypair, PublicKey } from "@solana/web3.js"
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor"
import { IDL, WbaPrereq } from "./programs/wba_prereq";
import wallet from "./dev-wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");
// Encode your GitHub username as a UTF-8 buffer
const github = Buffer.from("A-viralS", "utf8");

// Create an Anchor provider
const provider = new AnchorProvider(connection, new Wallet(keypair), { commitment: "confirmed" });

// Initialize the program
const program: Program<WbaPrereq> = new Program(IDL, provider);

// Create the PDA
const enrollment_seeds = [Buffer.from("prereq"), keypair.publicKey.toBuffer()];
const [enrollment_key, _bump] = PublicKey.findProgramAddressSync(enrollment_seeds, program.programId);

// Submit the transaction
(async () => {
    try {
      const txhash = await program.methods
        .complete(github)
        .accounts({
          signer: keypair.publicKey,
        })
        .signers([
          keypair
        ]).rpc();
      console.log(`Success! Check out your TX here:
  https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch (e) {
      console.error(`Oops, something went wrong: ${e}`)
    }
  })();
