import { useContext } from 'react';
import { storeContext } from '../context';

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


export { default as postStore } from './postStore.js'
