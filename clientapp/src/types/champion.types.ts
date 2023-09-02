export type ChampionMasteryCardPropsType = {
    encryptedPUUID: string;
    count: number;
}

export type ChampionMasteryType = {
    championPointsUntilNextLevel: number;
    chestGranted: boolean;
    championId: number;
    lastPlayTime: number;
    championLevel: number;
    summonerId: string;
    championPoints: number;
    championPointsSinceLastLevel: number;
    tokensEarned: number;
}

export type ChampionImagePropsType = {
    championName: string;
};

export type ChampionStatsPropsType = {
    level: number;
    points: number;
};

export type ChampionChestPropsType = {
    chestGranted: boolean;
};

export type ChampionLastPlayedPropsType = {
    lastPlayTime: number;
};