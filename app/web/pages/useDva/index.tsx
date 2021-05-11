import { UseModelState, ConnectRC, Loading, connect } from 'umi';
import styles from './index.less' 

export interface PageProps {
  useModel: UseModelState;
  loading: boolean;
}

const UseDva: ConnectRC<PageProps> = ({ useModel, dispatch, props }) => {
  const { welcome } = useModel;

  const useDispatch = () => {
    dispatch({
      type: 'useModel/change',
      payload: {
        welcome: 'you got it'
      }
    })
  }

  return (
    <div className='sou-main-color' onClick={useDispatch}>
      <h1 className={styles.h1}>{ welcome }</h1>
    </div>
  )
};

export default connect(
  ({ useModel, loading }: { useModel: UseModelState; loading: Loading }) => ({
    useModel,
    loading: loading.models.useModel,
  }),
)(UseDva);
