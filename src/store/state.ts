export enum StatusState {
  NotLoaded = 'NOT_LOADED',
  LoadedSuccess = 'LOADED_SUCCESS',
  LoadedFailure = 'LOADED_FAILURE',
}

export type RootState = {
  isLoading: number;
  statusState: StatusState;
}

export const state: RootState = {
  isLoading: 0,
  statusState: StatusState.NotLoaded,
};
