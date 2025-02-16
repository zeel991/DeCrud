import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Crud } from "../target/types/crud";
import { PublicKey} from "@solana/web3.js"

describe("crud", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Crud as Program<Crud>;

  it("Creates a Journal ", async () => {
    const title = "This is the title"
    const description = "This is the description"

    console.log(provider.wallet.publicKey)
    const [JournalAddress] = PublicKey.findProgramAddressSync(
          [Buffer.from(title), (provider.wallet.publicKey).toBuffer()],
          program.programId
        );
    console.log("Journal Calculated PDA : "+ JournalAddress)
    const response = 
      await program.methods
      .createJournalEntry(title,description)
      .rpc()

    console.log(response)
    
  });

  it("Updates the Journal ", async () => {
    const title = "This is the title for updation"
    const old_title = "This is the new title"
    const description = "This is the description for updation"
    const old_description = "This is the new description"

    await program.methods
      .createJournalEntry(old_title,old_description)
      .rpc()

    console.log(provider.wallet.publicKey)
    const [JournalAddress] = PublicKey.findProgramAddressSync(
          [Buffer.from(old_title), (provider.wallet.publicKey).toBuffer()],
          program.programId
        );
    
    console.log("Journal Calculated PDA : "+ JournalAddress)
    const response = 
      await program.methods
      .updateJournalEntry(old_title,title,description)
      .accounts({
        journalEntry:JournalAddress
      })
      .rpc()

    console.log(response)
    
  })

  it("Deletes a Journal ", async () => {
    const title = "This is the deletion title"
    const description = "This is the deletion description"

    console.log(provider.wallet.publicKey)
    const [JournalAddress] = PublicKey.findProgramAddressSync(
          [Buffer.from(title), (provider.wallet.publicKey).toBuffer()],
          program.programId
        );
    console.log("Journal Calculated PDA : "+ JournalAddress)

    await program.methods
      .createJournalEntry(title,description)
      .rpc()

    const response = 
      await program.methods
      .deleteJournalEntry(title)
      .accounts({
        journalEntry : JournalAddress,
      })
      .rpc()

    console.log(response)
    
  });
});
