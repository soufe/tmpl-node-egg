import styles from './index.less';

export type UseComponents = {
  message: string;
  children: React.ReactNode;
};

const useComponents: React.FC<UseComponents> = ({ message = 'msg', children }) => {
  return (
    <div className="sou-main-color">
      <h2 className={styles.h1}>{message}</h2>
      {children}
    </div>
  );
};

export default useComponents;
