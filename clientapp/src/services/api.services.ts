import { backend_api_url, ddragon_champions_url } from "@components/Api";

export async function fetchSummonerData(summonerName: string) {
    const res = await fetch(`${backend_api_url}/summoner/${summonerName}`);

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    return await res.json();
}


export async function fetchChampionData() {
    const res = await fetch(`${ddragon_champions_url}`);
    return await res.json();
}

export async function fetchChampionMasteries(encryptedPUUID: string, count: number) {
    const res = await fetch(`${backend_api_url}/champion-mastery/${encryptedPUUID}?count=${count}`);
    return await res.json();
}
