import {Wallet} from "ethers";
import EthCrypto from 'eth-crypto';
import {PRIVATE_KEY } from "./constants";
const wallet = new Wallet(PRIVATE_KEY);
export const getPublicAddress  = () => {
    return wallet.getAddress();
}

export const getPublicKey = () => {
    const publicKey = EthCrypto.publicKeyByPrivateKey(
        '0x107be946709e41b7895eea9f2dacf998a0a9124acbb786f0fd1a826101581a07'
    );

    return publicKey;
}

console.log(getPublicKey());

