import * as React from 'react';
import { useState } from 'react';
import { useRequest, history } from 'umi';
import { Toast } from 'antd-mobile';
import { homeService } from '@/services';
import styles from './index.less';
import UseComponents from '@/components/useComponents';

const Home: React.FC<{ unknown: any }> = () => {
  const TYPE = 1
  const TOKEN = '7573893fr38ovdem51q8vkrqjb5t8l24'
  const info = { type: TYPE, token: TOKEN }
  const [message, setMessage] = useState('')
  const { getUserInfo } = homeService
  
  const { run } = useRequest(getUserInfo, {
    manual: true,
    onSuccess: (data: { user_info: { nickname: string } }) => {
      const {
        user_info: { nickname },
      } = data;
      setMessage(nickname);
      Toast.info(nickname);
      setTimeout(() => {
        history.push('/useDva');
      }, 1000);
    },
  });

  return (
    <div className='sou-main-color' onClick={() => run(info)}>
      <h1 className={styles.h1}>click me to getUserInfo</h1>
      <UseComponents message={message}>
        <h3 className={styles.h1}></h3>
      </UseComponents>
    </div>
  );
};

export default Home;
