import React from 'react';

import Map from '../map/Map';

import styles from './home.module.css';

const Home = () => {
    return (
        <main className={styles.container}>
            <article className={styles.office__container}>
                <p className={styles.office__motto}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem explicabo hic porro sint
                    velit.
                </p>
                <div className={styles.office__card}>
                    <h2>
                        Introducere birou notarial
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deserunt et
                        facere
                        facilis in, itaque iure laborum laudantium nostrum optio quasi quis ratione repellendus
                        soluta
                        ullam. Illum, placeat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deserunt et
                        facere
                        facilis in, itaque iure laborum laudantium nostrum optio quasi quis ratione repellendus
                        soluta
                        ullam. Illum, placeat.
                    </p>
                    <button className="main__button">Afla Mai Multe</button>
                </div>
            </article>
            <article className={styles.map__container}>
                <h2>Usor accesibil si cu parcare disponibila, fiind situat in vecinatate Vivo center Cluj</h2>
                <Map containerElement={<div style={{height: `calc(500px + 100px)`, width: '100%'}}/>}
                     mapElement={<div style={{height: `100%`}}/>}/>
            </article>
            <article className={styles.notary__container}>
                <div className={styles.notary__description}>
                    <h1>Boca Aurel</h1>
                    <h2>Notar public</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum iusto laudantium
                        libero
                        nisi officia perferendis totam. Accusamus accusantium atque blanditiis, deserunt eaque, eum
                        minus possimus quo rerum tempore voluptatibus
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci deleniti dolor
                        dolorem laboriosam molestiae nesciunt quidem sapiente ut. A ab deserunt doloribus eligendi
                        minima quisquam rem tempora voluptatem!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci deleniti dolor
                        dolorem laboriosam molestiae nesciunt quidem sapiente ut. A ab deserunt doloribus eligendi
                        minima quisquam rem tempora voluptatem!
                    </p>
                </div>
                <div className={styles.notary__image}></div>
            </article>
            <article className={styles.team__container}>
                <h1>Cunoaste Echipa</h1>
                <div className={styles["team__card--container"]}>
                    <div className={styles.team__card}>
                        <div className={styles["team__member--photo1"]}>
                            <div className={styles.card__overlay}></div>
                        </div>
                        <h3>Aurelia Bocala</h3>
                        <p>Notar asistent</p>
                    </div>
                    <div className={styles.team__card}>
                        <div className={styles["team__member--photo2"]}>
                            <div className={styles.card__overlay}></div>
                        </div>
                        <h3>Aureliana Bochita</h3>
                        <p>Notar colaborator</p>
                    </div>
                    <div className={styles.team__card}>
                        <div className={styles["team__member--photo3"]}>
                            <div className={styles.card__overlay}></div>
                        </div>
                        <h3>Aurelianus Bocas</h3>
                        <p>Secretara</p>
                    </div>
                </div>
            </article>
            <article className={styles.activity__article}>
                <h2>Domeniile de activitate</h2>
                <div className={styles['activity--card__container']}>
                    <div className={styles.activity__card}>
                        <span>01.</span>
                        <h3>Legalizare acte</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi expedita nulla voluptate.
                            Aliquam assumenda dicta, eaque ex, expedita facere harum labore modi molestiae nesciunt,
                            odio
                            quaerat sequi sit soluta ullam.
                        </p>
                        <a>Afla Mai Multe</a>
                    </div>
                    <div className={styles.activity__card}>
                        <span>02.</span>
                        <h3>Acte notariale</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi expedita nulla voluptate.
                            Aliquam assumenda dicta, eaque ex, expedita facere harum labore modi molestiae nesciunt,
                            odio
                            quaerat sequi sit soluta ullam.
                        </p>
                        <a>Afla Mai Multe</a>
                    </div>
                    <div className={styles.activity__card}>
                        <span>03.</span>
                        <h3>Divorturi</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi expedita nulla voluptate.
                            Aliquam assumenda dicta, eaque ex, expedita facere harum labore modi molestiae nesciunt,
                            odio
                            quaerat sequi sit soluta ullam.
                        </p>
                        <a>Afla Mai Multe</a>
                    </div>
                    <div className={styles.activity__card}>
                        <span>04.</span>
                        <h3>Vanzare imobile</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi expedita nulla voluptate.
                            Aliquam assumenda dicta, eaque ex, expedita facere harum labore modi molestiae nesciunt,
                            odio
                            quaerat sequi sit soluta ullam.
                        </p>
                        <a>Afla Mai Multe</a>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Home;
