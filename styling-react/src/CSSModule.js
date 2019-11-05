import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx('wrapper', 'inverted')}>
    {/* // <div className={`${styles.wrapper} ${styles.inverted}`}> */}
    {/* // <div className={[styles.wrapper, styles.inverted].join(' ')}> */}
      안녕하세요 저는 <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;