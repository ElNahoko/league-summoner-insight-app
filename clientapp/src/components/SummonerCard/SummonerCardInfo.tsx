import React from 'react';
import { SummonerProfileType } from "@components/types/summoner.types";
import { ddragon_profileIcon_url } from '@components/Api';
import { format } from 'date-fns';

type SummonerCardInfoPropsType = {
    data: SummonerProfileType;
};

const SummonerCardInfo: React.FC<SummonerCardInfoPropsType> = ({ data }) => {
    const formattedLastConnection = format(new Date(data.revisionDate), "EEEE do 'of' LLLL 'at' h:mma");

    return (
        <div className="bg-gray-800 w-96 h-144 p-6 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-indigo-500 to-transparent"></div>

            <div className="mt-4 flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white mb-4 z-10 relative">{data.name}</h2>
                <img src={`${ddragon_profileIcon_url}/${data.profileIconId}.png`} alt="Summoner Icon" className="w-20 h-20 rounded-full border-4 border-indigo-500 shadow" />
            </div>

            <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg z-10 relative">
                <span className="font-semibold text-gray-600 text-sm">Summoner Level:</span>
                <span className="text-gray-800 text-sm">{data.summonerLevel}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg z-10 relative mt-4">
                <span className="font-semibold text-gray-600 text-sm">Last Modified:</span>
                <span className="text-gray-800 text-sm">{formattedLastConnection}</span>
            </div>
        </div>
    );
};

export default SummonerCardInfo;