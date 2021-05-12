import type { Effect, Reducer, Subscription } from 'umi';

export interface UseModelState {
  welcome: string;
}

export interface UseModelType {
  namespace: 'useModel';
  state: UseModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    change: Reducer<UseModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const UseModel: UseModelType = {
  namespace: 'useModel',
  state: {
    welcome: 'hi',
  },
  effects: {
    *query({ payload }, { call, put }) {
      yield call(payload, 1000);
      yield put({ type: 'change' });
    },
  },
  reducers: {
    change(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/useDva') {
          dispatch({
            type: 'change',
            payload: {
              welcome: 'click me to useDva',
            },
          });
        }
      });
    },
  },
};

export default UseModel;
