import { getDvaApp } from 'umi';
import type { IRouteComponentProps } from 'umi';
import { PersistGate } from 'redux-persist/integration/react';

export default function Layout({ children }: IRouteComponentProps) {
  const app = getDvaApp();
  const persistor = app._store.persist;

  return <PersistGate persistor={persistor}>{children}</PersistGate>;
}
