import {
    useAccount
} from "wagmi";

import axios from 'axios';

import { RUGS_NFT_MAINNET } from '../constants'


export function useRugsImage(connectedAccount) {

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

    axios
    .request(optionsMoralis)
    .then(function (response) {
        rugsResults = response.data.result;

        if(rugsResults.length != 0) {
            if(rugsResults.length > 1) {
                const randItem = Math.floor(Math.random()*rugsResults.length)
                selected_id = response.data.result[randItem].token_id;
            } else {
                selected_id = response.data.result[0].token_id;
            }

            console.log(selected_id);

            const optionsLooksRare = {
                method: 'GET',
                url: `https://api.looksrare.org/api/v1/tokens?collection=${RUGS_NFT_MAINNET}&tokenId=${selected_id}`,
                headers: {
                    accept: 'application/json',
                }
            };
        
            let lookResults;
            let imageURI;
        
            axios
            .request(optionsLooksRare)
            .then(function (response) {
                lookResults = response.data.data
                imageURI = response.data.data.imageURI;
                
                console.log(lookResults);
                console.log(imageURI);
                
            })
            .catch(function (error) {
                console.error(error);
            });
        
            return imageURI;
        } else {
            return '0'; //there is no token ID 0
        }

    })
    .catch(function (error) {
        console.error(error);
    });

    

    /*

    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.looksrare.org/api/v1/tokens?collection=0xf70d49ec015D67738482a09c849e02e89b6FE661&tokenId=10', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

    */



    
    

    
}

export default useRugsImage;


