import { useDispatch, useSelector } from 'umi';
import styles from './index.less';

const UseDva: React.FC<{ unknown: any }> = () => {
  const { welcome } = useSelector((state: any) => state.useModel);
  const dispatch = useDispatch();

  const emitDispatch = () => {
    dispatch({
      type: 'useModel/change',
      payload: 'you got it'
    });
  };

  return (
    <div className="sou-main-color" onClick={emitDispatch}>
      <h1 className={styles.h1}>{welcome}</h1>
    </div>
  );
};

export default UseDva;
