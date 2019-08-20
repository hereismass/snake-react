import { Action } from 'redux';

export enum APP {
  BOOTSTRAP = 'APP_BOOTSTRAP',
  SET_VERSION = 'APP_SET_VERSION'
}

export type BootstrapApp = Action<APP.BOOTSTRAP>;
export const bootstrapApp = (): BootstrapApp => ({ type: APP.BOOTSTRAP });

export type SetAppVersion = Action<APP.SET_VERSION> & { version: string };
export const setAppVersion = (version: string): SetAppVersion => ({
  type: APP.SET_VERSION,
  version
});
