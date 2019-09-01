import React from 'react';

import cx from 'classnames';

import styles from './stroll-to-top.module.css';

const ScrollButton = () => {
    const scrollToTop = () => {
        const body = document.querySelector('body');
        body.scrollIntoView({behavior: 'smooth'})
    };

    return (
        <i className={cx('fas', 'fa-arrow-circle-up', styles.button)} onClick={scrollToTop}></i>
    );
};

export default ScrollButton;
