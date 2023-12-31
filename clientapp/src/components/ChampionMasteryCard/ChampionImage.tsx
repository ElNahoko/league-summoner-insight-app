import React from 'react';

import { getSplashArtUrl } from '@/utils/championUtils';
import { ChampionImagePropsType } from '@/types/champion.types';

export const ChampionImage: React.FC<ChampionImagePropsType> = ({ championName }) => {
    const splashArt = championName ? getSplashArtUrl(championName) : null;
    return splashArt && <img src={splashArt} alt={championName} className="w-32 h-32 mb-2 rounded-full" />;
};