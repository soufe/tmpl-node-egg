import { useEffect } from 'react';
import styles from './index.less';
import share from '@/utils/wxshare';

const Share: React.FC<{ unkonw: any }> = (props: any) => {
  useEffect(() => {
    share({
      hide: true,
      title: '嗖嗖身边',
      desc: '嗖嗖身边',
      imgUrl: `${APP_OSS}h5/wx-share/logo.png`,
      entryUrl: `https://web.sousoushenbian.cn/${APP_NAME}${props.location.pathname}${props.location.search}`,
    });
  }, [props.location.pathname, props.location.search]);

  return (
    <div className="sou-main-color">
      <h1 className={styles.h1}>i am share</h1>
    </div>
  );
};

export default Share;
