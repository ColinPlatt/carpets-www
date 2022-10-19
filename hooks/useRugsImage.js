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

    // get the token IDs held by the user

    let rugsResults;
    
    axios
    .request(options)
    .then(function (response) {
        console.log(response.data.result[0].token_uri);

        output = response.data.rugsResults;
        
    })
    .catch(function (error) {
        console.error(error);
    });

    let selected_id;

    if(rugsResults.length != 0) {
        if{rugsResults.length > 1} {
            selected_id = Math.floor(Math.random()*rugsResults.length)
        } else {
            selected_id = response.data.result[0].token_id;
        }
    } else {
        return '0'; //there is no token ID 0
    }

    return selected_id;
    

    
}

export default useRugsImage;


