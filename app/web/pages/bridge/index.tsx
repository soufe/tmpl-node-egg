import { jsBridge } from '@sousoufe/jsbridge';
import styles from './index.less';

const Bridge: React.FC<{ unknown: any }> = () => {
  return (
    <div className="sou-main-color">
      <h1
        className={styles.h1}
        onClick={() => jsBridge('type', 'skipType', 'extraInfo', 'successCallback', 'failCallback')}
      >
        i am bridge
      </h1>
    </div>
  );
};

export default Bridge;
