import React from 'react';

import TitleCardWhite from '../../components/title-card-white/TitleCardWhite';

import styles from './divorce.module.css';
import PageTitle from '../../components/page-title/PageTitle';

const Divorce = () => {
    return (
        <main className={styles.container}>
            <PageTitle
                title="Divort"
            />
            <article style={{marginTop: '50px'}} id="1">
                <input type="checkbox" id="check1"/>
                <label htmlFor="check1" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Informatii generale"
                        number="1"
                    />
                </label>
                <div className={styles.panel__content}>

                    <p>Procedura divorţului pe cale notarială reprezintă cea mai simplă modalitate de desfacere a
                        căsătoriei, chiar şi în cazul în care există copii minori rezultaţi din căsătoria respectivă,
                        din afara căsătoriei sau adoptaţi de către cei doi soţi.</p>

                    <p>Pentru a putea fi instrumentată procedura divorţului pe cale notarială, soţii trebuie să îşi
                        expime acordul cu privire la:</p>
                    <p>- desfacerea căsătoriei</p>
                    <p>- utilizarea proceduri notariale</p>
                    <p>- numele de familie pe care îl va purta fiecare dintre ei după desfacerea căsătoriei</p>
                    <p>- efectele divorţului asupra copiiilor minori (dacă este cazul)</p>

                    <p>Avantajele pe care această procedură le prezintă:</p>
                    <p>- durată relativ redusă pentru îndeplinirea procedurii</p>
                    <p>- costuri totale reduse</p>
                    <p>- întreaga documentaţie necesară este îndeplinită de notarul public</p>
                    <p>- nu necesită prezenta martorilor, avocatului, mediatorului</p>

                    <p>Procedura divorţului prin acordul soţilor este de competenţa notarului public cu sediul biroului
                        în circumscripţia judecătoriei în a cărei rază teritorială se află locul încheierii căsătoriei
                        (localitatea unde s-a oficiat căsătoria) sau ultima locuinţă comună a soţilor (ultima locuinţă
                        în care soţii au convieţuit).</p>
                    <p>În cazul căsătoriilor încheiate în străinătate, locul încheierii căsătoriei este localitatea în
                        al cărei registru de stare civilă s-a transcris certificatul de căsătorie.</p>
                    <p>În cazul căsătoriilor încheiate la misiunile diplomatice sau la oficiile consulare, certificatul
                        de căsătorie se transcrie în registrul de stare civilă al Primăriei sectorului 1 Bucureşti,
                        locul căsătoriei fiind considerat Municipiul Bucureşti.</p>
                    <p>În vederea depunerii cererii de divorţ soţii se vor prezenta în faţa notarului public, personal
                        sau prin mandatar cu procură specială, autentică şi având un conţinut predeterminat, cu
                        precizarea că la termenul acordat pentru desfacerea căsătoriei, soţii se vor prezenta personal
                        la biroul notarial.</p>
                </div>
            </article>
            <article id="2">
                <input type="checkbox" id="check2"/>
                <label htmlFor="check2" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Acte necesare"
                        number="2"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>
                        Pentru îndeplinirea procedurii divorţului pe cale notarială sunt necesare următoarele acte:
                    </p>
                    <p>1. DIVORŢ FĂRĂ COPII MINORI</p>
                    <p>- actele de identitate ale soților;</p>
                    <p> - certificatele de naștere ale soţilor;</p>
                    <p> - certificatul de căsătorie al soţilor.</p>
                    <p> 2. DIVORŢ CU COPII MINORI</p>
                    <p> - actele de identitate ale soților</p>
                    <p> - certificatele de naștere ale soţilor</p>
                    <p> - certificatele de naștere ale copiilor minori</p>
                    <p> - certificatul de căsătorie al soţilor</p>
                    <p> În funcție de particularitățile fiecărui dosar pot fi necesare și alte documente
                        suplimentare.</p>
                    <p> Toate actele se vor prezenta de către solicitant în ORIGINAL.</p>
                    <p> Certificatul de căsătorie în original se păstrează la dosarul cauzei până la soluţionarea
                        acesteia.</p>
                </div>
            </article>
        </main>
    );
};

export default Divorce;
