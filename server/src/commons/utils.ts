import {Wallet} from "ethers";
import EthCrypto from 'eth-crypto';
import {PRIVATE_KEY } from "./constants";
const wallet = new Wallet(PRIVATE_KEY);
export const getPublicAddress  = () => {
    return wallet.getAddress();
}

export const getPublicKey = () => {
    const publicKey = EthCrypto.publicKeyByPrivateKey(
        PRIVATE_KEY
    );

    return publicKey;
}

console.log(getPublicKey());

