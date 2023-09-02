import React from 'react';
import { format } from 'date-fns';

import { ChampionLastPlayedPropsType } from '@components/types/champion.types';

export const ChampionLastPlayed: React.FC<ChampionLastPlayedPropsType> = ({ lastPlayTime }) => (
    <div className="flex items-center space-x-2 mt-2">
        <span className="text-sm text-gray-600">
            Last played on {format(new Date(lastPlayTime), 'EEEE do LLLL, y')} at {format(new Date(lastPlayTime), 'ha')}
        </span>
    </div>
);