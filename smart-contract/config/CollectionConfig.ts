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
  contractName: 'MoneySharkNFT',
  tokenName: 'SHARK',
  tokenSymbol: 'SHARK',
  hiddenMetadataUri: 'ipfs://QmVsJWppKCkbrBM9eGNZwNoz3fQUaA6xjvkRsrZBBtQHHz/hidden.json',
  maxSupply: 2022,
  whitelistSale: {
    price: 0.065,
    maxMintAmountPerTx: 4,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 4,
  },
  publicSale: {
    price: 0.08,
    maxMintAmountPerTx: 4,
  },
  contractAddress: '0x751A7006f99D9E27441b56EAdB9a6D5Ebbd9E40b',
  marketplaceIdentifier: 'money-shark-nft',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
