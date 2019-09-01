import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div>
                <p>&copy; Boca si asoctiatii. Toate dreptruile rezervate.</p>
                <p>Str. Traian, Nr. 1, Bl. A, Sc 2, Ap. 2-3, Loc. Floresti, Jud. Cluj<span>, 407280</span></p>
                <p>tel: +40312312325 fax: +40312312325</p>
            </div>
            <div className={styles.external__links}>
                <a href="http://www.instagram.com"><i className="fab fa-instagram" /></a>
                <a href="http://www.facebook.com"><i className="fab fa-facebook-f" /></a>
                <a href="http://www.whatsapp.com"><i className="fab fa-whatsapp" /></a>
            </div>
        </footer>
    );
};

export default Footer;
