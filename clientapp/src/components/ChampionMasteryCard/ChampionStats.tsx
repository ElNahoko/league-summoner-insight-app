import React from 'react';
import { formatNumberWithCommas } from '@/utils/championUtils';
import { ChampionStatsPropsType } from '@/types/champion.types';

export const ChampionStats: React.FC<ChampionStatsPropsType> = ({ level, points }) => (
    <div>
        <div className="flex items-center gap-2 mt-2">
            <i className="fas fa-trophy text-green-500"></i>
            <p className="text-sm font-bold">Level {level}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
            <i className="fas fa-star text-yellow-500"></i>
            <p className="text-sm font-bold text-gray-800 bg-gray-200 px-2 py-1 rounded">{formatNumberWithCommas(points)} Points</p>
        </div>
    </div>
);
