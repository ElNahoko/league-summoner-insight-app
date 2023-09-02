import axios from 'axios';

import { ApiResponse } from '../types/api.response.type'
import { riot_summoner_api_url, riot_api_key } from '../api';

export const GetSummonerByName = async (summonerName: string): Promise<ApiResponse> => {
    try {
        const results = await axios.get(`${riot_summoner_api_url}/summoners/by-name/${summonerName}?api_key=${riot_api_key}`);

        return {
            status: 200,
            success: true,
            data: results.data,
        }
    } catch (error) {
        console.error('/GetSummonerByName - error', error)
        return {
            status: 500,
            success: false,
        }
    }
}