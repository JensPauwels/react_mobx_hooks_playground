import { useContext } from 'react';

import { storeContext } from '../context';

export { default as store } from "./store";
export { default as todoStore } from './todoStore.js'
export { default as appStore } from './appStore.js'

export const getStore = store => {
  return useContext(storeContext)[store];
}

export const getStores = requestedStores => {
  const stores = useContext(storeContext);

  return requestedStores.reduce((storesToReturn, requestedStore) => {
    if (stores[requestedStore] !== undefined) {
      storesToReturn.push(stores[requestedStore]);
    }

    return storesToReturn;
  }, [])
}

