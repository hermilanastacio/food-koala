import { createContext, useContext } from 'react';
import { configure } from 'mobx';
import AppStore from '../stores/AppStore';

configure({ enforceActions: 'always' });

export class RootStore {
  appStore = new AppStore();
}

export const rootStore = new RootStore();

export const RootStoreContext = createContext(rootStore);

export const useStore = () => useContext(RootStoreContext);