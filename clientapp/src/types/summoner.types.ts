export type SummonerProfileType = {
    id: string
    accountId: string
    puuid: string
    name: string
    profileIconId: number
    revisionDate: number
    summonerLevel: number
}

export type SummonerProfileApiResultType = {
    status: number
    success: boolean
    data: SummonerProfileType
}

export type SumonnerCardPropsType = {
    summonerName: string | null;
    onProfileFetched?: (puuid: string) => void;
}

export type SummonerFetchStateType = {
    state: SummonerCardFetchState;
    data: SummonerProfileType | null;
    error: string | null;
}


export enum SummonerCardFetchState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  IDLE = 'IDLE',
}