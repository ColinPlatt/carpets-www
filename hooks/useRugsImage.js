import {
    useAccount
} from "wagmi";

import axios from 'axios';

import { RUGS_NFT_MAINNET } from '../constants'


export const useRugsImage = async (connectedAccount) => {
    const optionsMoralis = {
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

    // get the token IDs held by the user and

    let rugsResults;
    let selected_id;

    let response = await axios
        .request(optionsMoralis)

    rugsResults = response.data.result;

    if (rugsResults.length != 0) {
        if (rugsResults.length > 1) {
            const randItem = Math.floor(Math.random() * rugsResults.length)
            selected_id = response.data.result[randItem].token_id;
        } else {
            selected_id = response.data.result[0].token_id;
        }

        const optionsLooksRare = {
            method: 'GET',
            url: `https://api.looksrare.org/api/v1/tokens?collection=${RUGS_NFT_MAINNET}&tokenId=${selected_id}`,
            headers: {
                accept: 'application/json',
            }
        };

        let lookResults;
        let imageURI;

        let lrResponse = await axios
            .request(optionsLooksRare)

        lookResults = lrResponse.data.data
        imageURI = lrResponse.data.data.imageURI;

        return imageURI;
    } else {
        return '0'; //there is no token ID 0
    }

}

export default useRugsImage;


