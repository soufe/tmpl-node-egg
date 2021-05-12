import type { FC } from 'react';
import styles from './index.less';

const List: FC<{ unknown: any }> = () => {
  return (
    <div className="sou-main-color">
      <h1 className={styles.h1}>i am list</h1>
    </div>
  );
};

export default List;
