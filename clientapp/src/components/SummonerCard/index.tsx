"use client";

import { useState, useEffect } from 'react';

import LoadingSpinner from '../LoadingSpinner';
import SummonerCardInfo from './SummonerCardInfo';
import { fetchSummonerData } from '@components/services/api.services';
import { SummonerCardFetchState, SummonerFetchStateType, SumonnerCardPropsType } from "@components/types/summoner.types";
import SummonerCardError from './SummonerCardError';


const SummonerCard: React.FC<SumonnerCardPropsType> = ({ summonerName, onProfileFetched }) => {
  const [fetchState, setFetchState] = useState<SummonerFetchStateType>({
    state: SummonerCardFetchState.IDLE,
    data: null,
    error: null
  });

  useEffect(() => {
    async function fetchData() {
      setFetchState({ state: SummonerCardFetchState.LOADING, data: null, error: null });

      try {
        const data = await fetchSummonerData(summonerName!);
        setFetchState({ state: SummonerCardFetchState.SUCCESS, data: data.data, error: null });

        if (onProfileFetched) {
          onProfileFetched(data.data.puuid);
        }
      } catch (error: any) {
        setFetchState({ state: SummonerCardFetchState.ERROR, data: null, error: error.message });
      }
    }
    if (summonerName) {
      fetchData();
    }
  }, [summonerName]);


  return (
    <div className="flex justify-center items-center">
      {fetchState.state === SummonerCardFetchState.LOADING && <LoadingSpinner />}
      {fetchState.state === SummonerCardFetchState.ERROR && <SummonerCardError message={fetchState.error || 'An error occurred.'} />}
      {fetchState.state === SummonerCardFetchState.SUCCESS && <SummonerCardInfo data={fetchState.data!} />}
    </div>
  );
};

export default SummonerCard;