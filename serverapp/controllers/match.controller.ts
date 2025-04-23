import { GetLatestMatchesByPUUID } from "../services";

const GetLatestMatches = async (req: any, res: any) : Promise<any> => {
    const { encryptedPUUID } = req.params;

    const results: any = await GetLatestMatchesByPUUID(encryptedPUUID);

    return res.status(results.status).json(results);
}

export default { 
    GetLatestMatches
};
