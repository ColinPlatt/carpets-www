import {
    useAccount
} from "wagmi";

import axios from 'axios';

import { RUGS_NFT_MAINNET } from '../constants'


export function useRugsImage(connectedAccount) {

    const options = {
        method: 'GET',
        url: `https://deep-index.moralis.io/api/v2/${connectedAccount}/nft`,
        params: {
            chain: 'eth',
            format: 'decimal',
            token_addresses: RUGS_NFT_MAINNET
        },
        headers: {
            accept: 'application/json',
            'X-API-Key': process.env.MORALIS_API_KEY
        }
    };

    let output;
    
    axios
    .request(options)
    .then(function (response) {
        console.log(response.data.result[0].token_uri);

        output = response.data.result[0].token_uri
        
    })
    .catch(function (error) {
        console.error(error);
    });

    return `${output || 0}`
}

export default useRugsImage;


