"use client";

import React, { useState } from 'react';

import SummonerHeader from './SummonerHeader';
import SummonerSearch from './SummonerSearch';
import SummonerDisplay from './SummonerDisplay';

const SummonerProfile: React.FC = () => {
  const [showTopChampions, setShowTopChampions] = useState<boolean>(false);
  const [count, setCount] = useState<number>(3);
  const [encryptedPUUID, setEncryptedPUUID] = useState<string>('');

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <SummonerHeader />
      <SummonerSearch onProfileFetched={setEncryptedPUUID} />
      <SummonerDisplay
        count={count}
        encryptedPUUID={encryptedPUUID}
        showTopChampions={showTopChampions}
        onToggleTopChampions={() => setShowTopChampions(!showTopChampions)}
        onCountChange={(newCount) => setCount(newCount)}
      />
    </div>
  );
};

export default SummonerProfile;