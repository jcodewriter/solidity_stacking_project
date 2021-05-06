const { infuraApiKey, mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*',
        },

        ropsten: {
            provider: function() {
              return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraApiKey}`);
            },
            network_id: '3',
        },
    },

    mocha: {
        reporter: 'eth-gas-reporter',
    },
    
    solc: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },

    compilers: {
        solc: {
            version: '0.5.2',
        },
    },
};
