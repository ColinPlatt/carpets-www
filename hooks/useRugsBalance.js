
import {
    useAccount,
    useContractRead,
    erc721ABI,
} from "wagmi";

import { RUGS_NFT_MAINNET } from '../constants'

export function useRugsBalance() {
    const { address: userAddress } = useAccount();
    const { data, isError, isLoading, error } = useContractRead({
        address: RUGS_NFT_MAINNET,
        abi: erc721ABI,
        functionName: 'balanceOf',
        args: [userAddress]
    });

    return `${data || 0}`
}

export default useRugsBalance;