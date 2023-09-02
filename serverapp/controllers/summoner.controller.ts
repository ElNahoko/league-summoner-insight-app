import { GetSummonerByName } from "../services";

const GetResults = async (req: any, res: any) : Promise<any> => {
    const { name } = req.params

    const results: any = await GetSummonerByName(name)

    return res.status(results.status).json(results)
}

export default { 
    GetResults
};