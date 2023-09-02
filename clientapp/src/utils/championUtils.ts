export function getChampionNameById(championData: any, id: number): string | null {
    for (let champName in championData) {
        if (championData[champName].key == id) {
            return champName;
        }
    }
    return null;
}

export function getSplashArtUrl(championName: string): string {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`;
}
export function formatNumberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}