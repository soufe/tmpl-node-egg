import type { RequestConfig } from 'umi';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Reducer, Action } from 'redux';
import { PersistPartial } from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: `${APP_NAME}`,
  storage,
};

const persistEnhancer = () => (createStore: (arg0: Reducer<PersistPartial, Action<any>>, arg1: any, arg2: any) => any) => (reducer: Reducer<unknown, Action<any>>, initialState: any, enhancer: any) => {
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer);
  const persist = persistStore(store, null);
  return {
    persist,
    ...store,
  };
};

export const dva = {
  config: {
    extraEnhancers: [persistEnhancer()],
  },
}

export const request: RequestConfig = {
  timeout: 60000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [],
};