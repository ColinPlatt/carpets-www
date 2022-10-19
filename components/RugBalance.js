
import {
    useAccount,
    useContractRead,
    erc721ABI,
} from "wagmi";

import { RUGS_NFT_MAINNET } from '../constants'
import { Box } from 'theme-ui';

const RugBalance = () => {
    const { address: userAddress } = useAccount();
    const { data, isError, isLoading, error } = useContractRead({
        address: RUGS_NFT_MAINNET,
        abi: erc721ABI,
        functionName: 'balanceOf',
        args: [userAddress]
    },
    );

    return <Box>{`${data || 0}`} WARP</Box>
}

export default RugBalance;
