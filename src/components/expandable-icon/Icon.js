import React from 'react';

import styles from './icon.module.css';

const Icon = () => {
    return(
        <div className={styles.icon__container}>
            <div className={styles.inner}>
                <span>i</span>
                <h6>Info</h6>
                <p>Pentru programare selectati o data dati click pe ea si completati formularul</p>
                <p>Dupa completare veti primii un email de confirmare</p>
                <p>Orele colorate cu culoarea rosie sunt ocupate deja iar cele cu galbena sunt in curs de confirmare,
                    reveniti ulterior pentru a vedea daca s-au eliberat</p>
            </div>
        </div>
    )
};

export default Icon;
