
import {
    useAccount,
    useContractRead,
    erc721ABI,
} from "wagmi";

import { RUGS_NFT_MAINNET } from '../constants'
import { Button } from 'theme-ui';

const RugBalance = () => {
    const { address: userAddress } = useAccount();
    const { data, isError, isLoading, error } = useContractRead({
        address: RUGS_NFT_MAINNET,
        abi: erc721ABI,
        functionName: 'balanceOf',
        args: [userAddress]
    },
    );

    return <Button>{`${data || 0}`} RUGS</Button>
}

export default RugBalance;
