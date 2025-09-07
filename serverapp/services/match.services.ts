import axios from 'axios';

import { ApiResponse } from '../types/api.response.type'
import { riot_api_key, riot_match_api_url } from '../api';

export const GetLatestMatchesByPUUID = async (encryptedPUUID: string): Promise<ApiResponse> => {
    try {
        const results = await axios.get(`${riot_match_api_url}/matches/by-puuid/${encryptedPUUID}/ids?start=0&count=3&api_key=${riot_api_key}`);

        return {
            status: 200,
            success: true,
            data: results.data,
        }
    } catch (error) {
        console.error('/GetLatestMatchesByPUUID - error', error)
        return {
            status: 500,
            success: false,
        }
    }
}
