import { GetSummonerChampionMasteriesByPUUID } from "../services";

const GetResults = async (req: any, res: any) : Promise<any> => {
    const { encryptedPUUID } = req.params
    const count: number = req.query.count;

    const results: any = await GetSummonerChampionMasteriesByPUUID(encryptedPUUID, count)

    return res.status(results.status).json(results)
}

export default { 
    GetResults
};