import React, { useState } from 'react';
import ChampionMasteryCard from '../ChampionMasteryCard';
import TopChampionOptions from './TopChampionOptions';

const SummonerDisplay: React.FC<{
    encryptedPUUID: string;
    count: number;
    showTopChampions: boolean;
    onToggleTopChampions: () => void;
    onCountChange: (newCount: number) => void;
}> = ({ encryptedPUUID, count, showTopChampions, onToggleTopChampions, onCountChange }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg w-auto flex flex-col items-center">
        <TopChampionOptions
            showTopChampions={showTopChampions}
            count={count}
            onToggleTopChampions={onToggleTopChampions}
            onCountChange={onCountChange}
        />
        {showTopChampions && encryptedPUUID && (
            <ChampionMasteryCard encryptedPUUID={encryptedPUUID} count={count} />
        )}
    </div>
);

export default SummonerDisplay;