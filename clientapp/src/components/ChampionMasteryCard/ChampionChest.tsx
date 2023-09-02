import React from 'react';

import { ChampionChestPropsType } from '@components/types/champion.types';

export const ChampionChest: React.FC<ChampionChestPropsType> = ({ chestGranted }) => (
    <div className="flex items-center space-x-2 mt-2">
        {chestGranted ? (<span className="text-green-500">&#x1F5A4;</span>) : (<span className="text-gray-400">&#x1F5A4;</span>)}
        <span className="text-sm text-gray-600">
            {chestGranted ? 'Chest Granted' : 'Chest Not Granted'}
        </span>
    </div>
);