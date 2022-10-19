
import {
    useAccount,
    useContractRead,
    erc721ABI,
} from "wagmi";

import { RUGS_NFT_MAINNET } from '../constants'
import { Button } from 'theme-ui';

const CarpetsBalance = () => {
    const { address: userAddress } = useAccount();
    const { data, isError, isLoading, error } = useContractRead({
        address: RUGS_NFT_MAINNET,
        abi: erc721ABI,
        functionName: 'balanceOf',
        args: [userAddress]
    },
    );

    return <Button sx={{
            '&:hover': {transform: 'scale(1.025)'},
            '&:active' : {transform: 'scale(0.95)'}
            }}>{`${data || 0}`} $carpets</Button>
}

export default CarpetsBalance;

//@TODO change this to reflect the balance of the latest $CARPET contract