import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MoneySharkTank',
  tokenName: 'SHARK',
  tokenSymbol: 'SHARK',
  hiddenMetadataUri: 'ipfs://QmVsJWppKCkbrBM9eGNZwNoz3fQUaA6xjvkRsrZBBtQHHz/hidden.json',
  maxSupply: 2022,
  whitelistSale: {
    price: 0.065,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.08,
    maxMintAmountPerTx: 5,
  },
  contractAddress: null,
  marketplaceIdentifier: 'money-shark-tank',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
