import { Selector } from 'reselect';

/**
 * Returns the application version
 */
type GetAppVersion = Selector<IState, string>;
export const getAppVersion: GetAppVersion = state => state.app.version;
