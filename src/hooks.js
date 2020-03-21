import { useContext } from 'react';
import { storeContext } from '../context';

export const useStore = store => {
  return useContext(storeContext)[store];
}

export const useStores = requestedStores => {
  const stores = useContext(storeContext);

  return requestedStores.reduce((storesToReturn, requestedStore) => {
    if (stores[requestedStore] !== undefined) {
      storesToReturn.push(stores[requestedStore]);
    }

    return storesToReturn;
  }, [])
}


