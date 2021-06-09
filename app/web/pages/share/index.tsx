import { useEffect } from 'react';
import { useLocation } from 'umi';
import share from '@/utils/wxshare';
import styles from './index.less';

const Share: React.FC<{ unkonw: any }> = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    share({
      hide: true,
      title: '嗖嗖身边',
      desc: '嗖嗖身边',
      imgUrl: `${APP_OSS}h5/wx-share/logo.png`,
      entryUrl: `${APP_ENV_PROD}${APP_NAME}${pathname}${search}`,
    });
  }, [pathname, search]);

  return (
    <div className="sou-main-color">
      <h1 className={styles.h1}>i am share</h1>
    </div>
  );
};

export default Share;
