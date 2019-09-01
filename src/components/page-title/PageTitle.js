import React from 'react';

import styles from './page-title.module.css';

const PageTitle = ({title, subtitle}) => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
        </section>
    );
};

export default PageTitle;
