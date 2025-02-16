# Solana CRUD Journal Smart Contract

This repository contains a decentralized CRUD journal system implemented as a Solana smart contract using the Anchor framework. The contract allows users to create, update, and delete journal entries in a secure and transparent manner.

## Features
- **Create Journal Entries**: Users can create new journal entries with custom content.
- **Update Entries**: Modify existing journal entries.
- **Delete Entries**: Remove journal entries when no longer needed.
- **Secure and Transparent**: Leverages Solana's blockchain for immutable and verifiable journal records.

## Prerequisites
- Rust (latest stable version)
- Solana CLI tools
- Anchor Framework
- Node.js and npm (for client-side interactions)

## Installation

Clone the repository:
```sh
git clone https://github.com/zeel991/DeCrud.git
cd DeCrud
```

Install dependencies:
```sh
npm install
```

Build the program:
```sh
anchor build
```

## Usage

### Deploying the Contract
Update the `Anchor.toml` file with your desired cluster (e.g., devnet, testnet, or mainnet).

Deploy the program:
```sh
anchor deploy
```

Update the program ID in `lib.rs` and `Anchor.toml` with the newly generated program ID.

### Running Tests
Execute the test suite to ensure everything is working correctly:
```sh
anchor test
```

## Smart Contract Structure
The main components of the smart contract include:

- **Journal Entry**: Represents an individual journal entry with content and metadata.

Key instructions:
- `create_journal`: Creates a new journal entry.
- `update_journal`: Updates an existing journal entry.
- `delete_journal`: Deletes a journal entry.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

