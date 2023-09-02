"use client";

import { useEffect, useState } from 'react';

import { ChampionImage } from './ChampionImage';
import { ChampionStats } from './ChampionStats';
import { ChampionChest } from './ChampionChest';
import { ChampionLastPlayed } from './ChampionLastPlayed';
import { getChampionNameById, } from '@components/utils/championUtils';
import { fetchChampionData, fetchChampionMasteries } from '@components/services/api.services';
import { ChampionMasteryCardPropsType, ChampionMasteryType } from '@components/types/champion.types';

const ChampionMasteryCard: React.FC<ChampionMasteryCardPropsType> = ({ encryptedPUUID, count }) => {
    const [championMasteries, setChampionMasteries] = useState<ChampionMasteryType[]>([]);
    const [championData, setChampionData] = useState<any | null>(null);

    useEffect(() => {
        async function fetchData() {
            const masteries = await fetchChampionMasteries(encryptedPUUID, count);
            const data = await fetchChampionData();

            setChampionMasteries(masteries.data);

            setChampionData(data.data);
        }

        fetchData();
    }, [encryptedPUUID, count]);

    return (
        <div className="mt-4">
            <div className="flex justify-center items-center mb-4">
                <i className="fas fa-chess-knight text-indigo-600 text-2xl mr-2"></i>
                <h2 className="text-xl font-bold">Top {count} Champions</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {championMasteries.map((mastery) => {
                    const championName = getChampionNameById(championData, mastery.championId) ?? '';
                    return (
                        <div key={mastery.championId} className="border p-4 rounded w-1/4 flex flex-col items-center bg-white shadow-lg">
                            <ChampionImage championName={championName} />
                            <ChampionStats level={mastery.championLevel} points={mastery.championPoints} />
                            <ChampionChest chestGranted={mastery.chestGranted} />
                            <ChampionLastPlayed lastPlayTime={mastery.lastPlayTime} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default ChampionMasteryCard;
