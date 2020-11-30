export enum RootStateFields {
  IS_LOADING = 'isLoading',
  STATUS = 'statusState',
}

export type RootState = {
  [RootStateFields.IS_LOADING]: number;
  [RootStateFields.STATUS]: 0 | 1 | 2 | 3;
}

export const state: RootState = {
  [RootStateFields.IS_LOADING]: 0,
  [RootStateFields.STATUS]: 0,
};
