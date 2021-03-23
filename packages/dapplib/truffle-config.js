require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain company hunt case off trouble'; 
let testAccounts = [
"0x58aedd5947ec0763f08077459988f8f3a63db0cb5d39ca9c36f3bb1220ddb8fa",
"0x28453c41234ce54264a9c634ba8f93855ea38f0d7904cdb83cdc246658289cb7",
"0xea1c0765abfe05f8ce3affcfaf7d3d1f51d439842faa69a7fbb25ef5614f3c2d",
"0x05a1f94eb6aa8c7abfae893b9e16dd0b48e13f7166d3a1e111ce89a536a94536",
"0xa7ee6ecab7739cdf784aff30a3c8f80b33d46adabf94b76656aef134ed84f44d",
"0xe19a7dbd3245c504c05c808ebbca9c66404b801a234975600bbb032e1abca714",
"0xa5a28b93face6134c88963317ef93984a804179301a9cd2537eefdff12013c2c",
"0x6cd447c2d0ad32c41ba956779e890e789ac9cc9fb3ecf20b6c23cc9b84b6126a",
"0x8363dd1c004592bb6ba3f13521b71473a7c0b593df41c04bef0f9c89ef995856",
"0xd3b0e7400b886c3d411b69d5332b213c3564a8c76c978a0e4ab853194c791173"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
