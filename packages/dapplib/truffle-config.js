require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush street cruise script coil inside light army gather'; 
let testAccounts = [
"0xe1115e12bdb12e302d68a1ee6db565eb5806b5c98e99b3cd9fc53dce46f1ae30",
"0xd022340871d4f49238e9770f029612d1d4431e0d8ea17555e85ff679c1d49b3b",
"0x67ad681103c4ad19b18a7a2a023481c05f2f948b762e9f11420a055a4d47f2fa",
"0x9d83e26b50834f193cb788c8f91ee1b621da553e1c49983a4a3caf68bae27019",
"0x60229c754c978cb45f3442b562bca5d033344726f974eacfed6b36a25c5f6c4b",
"0x7928ef1774f592925fac041fd31c3ffec2ee31149d0cae3649f1c0c98365ec21",
"0x902b803fcfa78838eba40771641f34491bfd3d3272de316ca348dfaac0b0212b",
"0x9a6df6d62908d8f107ad0be3841f4b7cc1960b052131b6a57bf40da61b4994b0",
"0x744db287d9b54464ef7c21e06d192175d85123623f924012df2f689fefbe5816",
"0x25b85975724168309466e0f13348f4eb4400330f16a261cdb6c9b695abbfd10b"
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
            version: '^0.8.0'
        }
    }
};

