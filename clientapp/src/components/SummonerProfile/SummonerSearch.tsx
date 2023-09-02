import React, { useState } from 'react';
import SearchBar from '@components/components/SearchBar';
import SummonerCard from '../SummonerCard';

const SummonerSearch: React.FC<{ onProfileFetched: (encryptedPUUID: string) => void }> = ({ onProfileFetched }) => {
    const [summonerName, setSummonerName] = useState<string | null>(null);

    return (
        <div>
            <SearchBar onSubmit={setSummonerName} />
            {summonerName && <SummonerCard summonerName={summonerName} onProfileFetched={onProfileFetched} />}
        </div>
    );
};

export default SummonerSearch;