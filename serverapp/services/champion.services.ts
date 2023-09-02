import axios from 'axios';

import { ApiResponse } from '../types/api.response.type'
import { riot_api_key, riot_champion_api_url } from '../api';

export const GetSummonerChampionMasteriesByPUUID = async (encryptedPUUID: string, count: number): Promise<ApiResponse> => {
    try {
        const results = await axios.get(`${riot_champion_api_url}/champion-masteries/by-puuid/${encryptedPUUID}/top?count=${count}&api_key=${riot_api_key}`);

        return {
            status: 200,
            success: true,
            data: results.data,
        }
    } catch (error) {
        console.error('/GetSummonerChampionMasteriesByPUUID - error', error)
        return {
            status: 500,
            success: false,
        }
    }
}