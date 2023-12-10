import { Router, Request, Response } from 'express';
import {Contract , JsonRpcProvider} from "ethers";
import {CONTRACT_ADDRESS, RPC_URL, } from "../commons/constants";
import ABI from "../commons/SAFUPass.json";
import {getPublicAddress} from "../commons/utils";

const v1Router = Router();

v1Router.get('/callback/login/:useraddress', async (req: Request, res: Response) => {
    try {
        const provider = new JsonRpcProvider(RPC_URL);
        const address =  req.params.useraddress;

        const contract = new Contract(CONTRACT_ADDRESS, ABI, provider);

        const publicAddress = await getPublicAddress();

        let info = await contract.authLogins(address, publicAddress );

        if(!info) {

        }


    } catch (err) {
        res.status(500).send({
            message: "",
        });
    }
})

export default v1Router;

