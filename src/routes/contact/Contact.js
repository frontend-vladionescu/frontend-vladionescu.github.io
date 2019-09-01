import React from 'react';

import styles from './contact.module.css';
import Map from '../../components/map/Map';
import Calendar from '../../components/calendar/Calendar';
import PageTitle from '../../components/page-title/PageTitle';

const Contact = () => {
    return (
        <main className={styles.container}>
            <PageTitle
                title="Contact"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae cupiditate dicta doloremque eos, fuga, maiores natus numquam placeat quia quo quos reiciendis, repellat similique sit suscipit vel? Inventore, nobis!"
            />
            <section className={styles.section__container}>
                <div className={styles.text__container}>
                    <p>Situat la 0 metrii de Centrul Comercial Vivo Cluj-Napoca</p>
                    <p style={{marginBottom: '30px'}}>Access la parcarea vestica a Centrului Comercial Vivo Cluj-Napoca</p>
                    <div>
                    <p>Orar: Luni - Vineri : 9:00 - 15:00</p>
                    <p>Adresa: Str. Traian, Nr. 1, Bl. A, Sc 2, Ap. 2-3, Loc. Floresti, Jud. Cluj, 407280</p>
                    <p>Tel: 0770 808 808; Fax: 0770 808 808</p>
                    <p>Email: notar-boca@notar.ro</p>
                    </div>
                </div>
                <div className={styles.separator}/>
                <Map containerElement={<div style={{height: '400px', maxWidth: '800px', minWidth: '300px', flex: '1'}}/>}
                     mapElement={<div style={{height: `100%`}}/>}/>
            </section>
            <div className={styles.calendar__container}>
                <h2>Programare online</h2>
                <p>Pentru efectuarea unei programari online selecteaza una din orele disponibile(cele care nu au nici o culoare), complenteaza datele personale si confirma.</p>
                <p style={{marginBottom: '50px'}}>Dupa ce programarea dumneavoastra va fi validata de catre echipa noastra, vei fi notificat printr-un email, care va confirma programarea</p>
                <Calendar/>
            </div>
        </main>

    );
};

export default Contact;
