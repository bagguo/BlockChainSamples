//引入依赖​
const bip39 = require('bip39')
const HDWallet = require('ethereum-hdwallet')
const mnemonic = bip39.generateMnemonic(128,null,bip39.wordlists.chiness_simplified)//生成助记词
console.log('助记词' + mnemonic);
//通过随机助记词生成公私钥、地址
async function getAdress(mnemonic) {
    const seed = await bip39.mnemonicToSeed(mnemonic)//根据助记词生成seed
    const hdwallet = HDWallet.fromSeed(seed)//通过seed获取hdWallet
    const key = hdwallet.derive("m/44' /60' /0/0")//源于，得自。设置地址路径
    console.log("PrivateKey = " + key.getPrivateKey().toString('hex'))//私钥
    console.log("PublicKey = " + key.getPublicKey().toString('hex'))//公钥
    const EthAddress = '0x' + key.getAddress().toString('hex')//地址
    console.log("Eth Address = " + EthAddress)
}
//通过同一个seed获取多个地址
async function getAdressFromSameSeed(mnemonic) {
    const seed = await bip39.mnemonicToSeed(mnemonic)//根据助记词生成seed
    const hdwallet = HDWallet.fromSeed(seed)//通过seed获取hdWallet
    for(var i = 0; i < 10; i++) {
        const key = hdwallet.derive("m/44' /60' /0/0" + i)//源于，得自。设置地址路径
        console.log("========地址" + i + "===========")
        console.log("PrivateKey = " + key.getPrivateKey().toString('hex'))//私钥
        console.log("PublicKey = " + key.getPublicKey().toString('hex'))//公钥
        const EthAddress = '0x' + key.getAddress().toString('hex')//地址
        console.log("Eth Address = " + EthAddress)
    }
    
}
getAdress(mnemonic)
getAdressFromSameSeed(mnemonic)
