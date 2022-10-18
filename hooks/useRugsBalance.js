import { 
    useAccount, 
    useContractRead, 
    erc721ABI,
} from "wagmi";

import {RUGS_NFT_MAINNET} from '../constants'
import rugsABI from '../abi/rugs.abi.json'

export function useRugsBalance() {

    const {address: userAddress} = useAccount();

    console.log(`Trying Connected Address: ${userAddress}`);

    const {data, isError, isLoading, error} = useContractRead({
        address: RUGS_NFT_MAINNET,
        abi: erc721ABI,
        functionName: 'balanceOf',
        args: [userAddress]
    },
    );

    if(isError) {
        return "error"
    } else {
        console.log(`Trying ContractRead: ${data}`)

        return data;

    }

    
}