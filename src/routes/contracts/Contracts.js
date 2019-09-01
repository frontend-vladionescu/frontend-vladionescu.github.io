import React from 'react';

import TitleCardWhite from '../../components/title-card-white/TitleCardWhite';

import styles from './contracts.module.css';
import PageTitle from '../../components/page-title/PageTitle';

const Contracts = () => {
    return (
        <main className={styles.container}>
            <PageTitle
                title="Contracte"
            />
            <article style={{marginTop: '50px'}} id="1">
                <input type="checkbox" id="check1"/>
                <label htmlFor="check1" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Contractul de vanzare"
                        number="1"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>Potrivit art.1650 Cod civil, vânzarea este contractul prin care vânzătorul transmite sau, după
                        caz, se obligă să transmită cumpărătorului proprietatea unui bun în schimbul unui preţ pe care
                        cumpărătorul se obligă să îl plătească. Poate fi, de asemenea, transmis prin vânzare un
                        dezmembrământ al dreptului de proprietate sau orice alt drept (real, de creanţă, din domeniul
                        proprietăţii intelectuale, etc).</p>
                    <p>Nu pot forma obiectul contractului de vânzare drepturile personale nepatrimoniale și cele
                        patrimoniale care au un caracter strict personal (dreptul de uz, dreptul de abitație al soțului
                        supraviețuitor, etc.) sau drepturile care sunt prevăzute de lege ori sunt contractate intuitu
                        personae (dreptul de întreținere, dreptul la pensie, etc.).</p>
                    <p>Acte necesare pentru încheirea contractului:</p>
                    <p>- actele de identitate ale părţilor, iar în cazul în care părţile sunt reprezentate, procura sau
                        actul din care
                        rezultă reprezentarea</p>
                    <p>- actele de stare civilă ale părţilor şi convenţia matrimonială (dacă este cazul)</p>
                    <p>- actele de proprietate ale bunului ce se vinde (contract de vânzare, donaţie, certificat de
                        moştenitor,
                        proces-verbal de predare-primire, hotărâre judecătorească, etc.)</p>
                    <p>- certificatul de atestare fiscală emis în vederea înstrăinării</p>
                    <p>- adeverinţa eliberată de asociaţia de proprietari (dacă este cazul)</p>
                    <p>- certificatul de performanţă energetică (dacă este cazul)</p>
                    <p>- adeverinţele eliberate de furnizorii de utilităţi (energie electrică, gaze naturale, etc.) din
                        care să rezulte
                        că nu există datorii către acestea sau ultimele facturi însoţite de dovada plăţii lor</p>
                    <p>În funcție de particularitățile fiecărui contract pot fi necesare și alte documente
                        suplimentare</p>
                    <p>Toate actele se vor prezenta de către solicitant în ORIGINAL</p>
                </div>
            </article>
            <article id="2">
                <input type="checkbox" id="check2"/>
                <label htmlFor="check2" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Contractul de donatie"
                        number="2"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>Potrivit art.985 Cod Civil, donaţia este contractul prin care, cu intenţia de a gratifica, o
                        parte, numită donator, dispune în mod irevocabil de un bun în favoarea celeilalte părţi, numită
                        donatar.</p>
                    <p> Contractul de donaţie se încheie în formă autentică, sub sancţiunea nulităţii absolute.</p>
                    <p> Acte necesare pentru încheirea contractului:</p>
                    <p> - actele de identitate ale părţilor, iar în cazul în care părţile sunt reprezentate, procura
                        sau actul din care rezultă reprezentarea</p>
                    <p>- actele de stare civilă ale părţilor şi convenţia matrimonială (dacă este cazul)</p>
                    <p>- actele de proprietate ale bunului ce se donează (contract de vânzare, donaţie, certificat de
                        moştenitor
                        proces-verbal de predare-primire, hotărâre judecătorească, etc.)</p>
                    <p>- certificatul de atestare fiscală emis în vederea înstrăinării</p>
                    <p>- adeverinţa eliberată de asociaţia de proprietari (dacă este cazul)</p>
                    <p>- adeverinţele eliberate de furnizorii de utilităţi (energie electrică, gaze naturale, etc.) din
                        care să rezulte că nu există datorii către acestea sau ultimele facturi însoţite de dovada
                        plăţii lor</p>
                    <p>În funcție de particularitățile fiecărui contract pot fi necesare și alte documente
                        suplimentare.</p>
                    <p>Toate actele se vor prezenta de către solicitant în ORIGINAL.</p>
                </div>
            </article>
            <article id="3">
                <input type="checkbox" id="check3"/>
                <label htmlFor="check3" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Contractul de schimb"
                        number="3"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>Potrivit art.1736 Cod Civil, contractul de schimb este un contract prin care fiecare dintre
                        părţi, denumite copermutanţi, transmite sau, după caz, se obligă să transmită un bun pentru a
                        dobândi un altul.</p>
                    <p>Acte necesare pentru încheirea contractului:</p>
                    <p>- actele de identitate ale părţilor, iar în cazul în care părţile sunt reprezentate, procura sau
                        actul din care
                        rezultă reprezentarea</p>
                    <p>- actele de stare civilă ale părţilor şi convenţia matrimonială (dacă este cazul)</p>
                    <p>- actele de proprietate ale bunului ce se vinde (contract de vânzare, donaţie, certificat de
                        moştenitor,
                        proces-verbal de predare-primire, hotărâre judecătorească, etc.)</p>
                    <p>- certificatul de atestare fiscală emis în vederea înstrăinării</p>
                    <p>- adeverinţa eliberată de asociaţia de proprietari (dacă este cazul)</p>
                    <p>- certificatul de performanţă energetică (dacă este cazul)</p>
                    <p>- adeverinţele eliberate de furnizorii de utilităţi (energie electrică, gaze naturale, etc.) din
                        care să rezulte
                        că nu există datorii către acestea sau ultimele facturi însoţite de dovada plăţii lor</p>
                    <p>În funcție de particularitățile fiecărui contract pot fi necesare și alte documente
                        suplimentare.</p>
                    <p>Toate actele se vor prezenta de către solicitant în ORIGINAL.</p>
                </div>
            </article>
            <article id="4">
                <input type="checkbox" id="check4"/>
                <label htmlFor="check4" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Contractul de locatiune"
                        number="4"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>Potrivit art.1777 Cod Civil, locaţiunea este contractul prin care o parte, numită locator, se
                        obligă să asigure celeilalte părţi, numite locatar, folosinţa unui bun pentru o anumită
                        perioadă, în schimbul unui preţ, denumit chirie. Locaţiunea bunurilor imobile şi aceea a
                        bunurilor mobile se numeşte închiriere, iar locaţiunea bunurilor agricole poartă denumirea de
                        arendare.</p>
                    <p>Acte necesare pentru încheirea contractului:</p>
                    <p> - actele de identitate ale părţilor, iar în cazul în care părţile sunt reprezentate, procura sau
                        actul din care
                        rezultă reprezentarea</p>
                    <p> - actele de stare civilă ale părţilor (dacă este cazul)</p>
                    <p>- actele din care rezultă dreptul locatorului asupra bunului ce face obiectul locaţiunii
                        (contract de
                        vânzare, donaţie, certificat de moştenitor, proces-verbal de predare-primire, hotărâre
                        judecătorească,
                        contract de locaţiune, contract de comodat, etc.)</p>
                    <p>- certificatul de performanţă energetică (dacă este cazul)</p>

                    <p>În funcție de particularitățile fiecărui contract pot fi necesare și alte documente
                        suplimentare.</p>
                    <p>Toate actele se vor prezenta de către solicitant în ORIGINAL.</p>
                </div>
            </article>
            <article id="5">
                <input type="checkbox" id="check5"/>
                <label htmlFor="check5" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Contractul de comodat"
                        number="5"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>
                        Potrivit art.2146 Cod Civil, împrumutul de folosinţă este contractul cu titlu gratuit prin care
                        o parte, numită comodant, remite un bun mobil sau imobil celeilalte părţi, numite comodatar,
                        pentru a se folosi de acest bun, cu obligaţia de a-l restitui după un anumit timp.
                    </p>
                    <p> Acte necesare pentru încheirea contractului:</p>
                    <p> - actele de identitate ale părţilor, iar în cazul în care părţile sunt reprezentate, procura sau
                        actul din care
                        rezultă reprezentarea;</p>
                    <p> - actele de stare civilă ale părţilor (dacă este cazul)</p>
                    <p> - actele din care rezultă dreptul comodantului asupra bunului ce face obiectul împrumutului
                        (contract de
                        vânzare, donaţie, certificat de moştenitor, proces-verbal de predare-primire, hotărâre
                        judecătorească,
                        contract de comodat, etc.)
                    </p>
                    <p>În funcție de particularitățile fiecărui contract pot fi necesare și alte documente
                        suplimentare.</p>
                    <p>Toate actele se vor prezenta de către solicitant în ORIGINAL.</p>
                </div>
            </article>
            <article id="6">
                <input type="checkbox" id="check6"/>
                <label htmlFor="check6" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Contractul de imprumut"
                        number="6"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>Potrivit art.2158 Cod Civil, împrumutul de consumaţie este contractul prin care împrumutătorul
                        remite împrumutatului o sumă de bani sau alte asemenea bunuri fungibile şi consumptibile prin
                        natura lor, iar împrumutatul se obligă să restituie după o anumită perioadă de timp aceeaşi sumă
                        de bani sau cantitate de bunuri de aceeaşi natură şi calitate.</p>
                    <p>ACTE NECESARE pentru încheirea contractului:</p>
                    <p>- actele de identitate ale părţilor, iar în cazul în care părţile sunt reprezentate, procura sau
                        actul din care
                        rezultă reprezentarea</p>
                    <p>- actele de stare civilă ale părţilor (dacă este cazul)</p>
                    <p>În funcție de particularitățile fiecărui contract pot fi necesare și alte documente
                        suplimentare.</p>
                    <p>Toate actele se vor prezenta de către solicitant în ORIGINAL.</p>
                </div>
            </article>
            <article id="7">
                <input type="checkbox" id="check7"/>
                <label htmlFor="check7" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Contractul de renta-viagera"
                        number="7"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>Potrivit art.2242 Cod Civil, prin contractul de rentă viageră o parte, numită debirentier, se
                        obligă să efectueze în folosul unei anumite persoane, numită credirentier, prestaţii periodice,
                        constând în sume de bani sau alte bunuri fungibile. Renta viageră se constituie pe durata vieţii
                        credirentierului dacă părţile nu au stipulat constituirea acesteia pe durata vieţii
                        debirentierului sau a unei terţe persoane determinate.
                        Renta viageră poate fi constituită cu titlu oneros, în schimbul unui capital de orice natură,
                        sau cu titlu gratuit.</p>
                    <p> Acte necesare pentru încheirea contractului:</p>
                    <p>- actele de identitate ale părţilor, iar în cazul în care părţile sunt reprezentate, procura sau
                        actul din care
                        rezultă reprezentarea</p>
                    <p> - actele de stare civilă ale părţilor şi convenţia matrimonială (dacă este cazul)</p>
                    <p> - actele de proprietate ale bunului ce se înstrăinează (contract de vânzare, donaţie, certificat
                        de
                        moştenitor, proces-verbal de predare-primire, hotărâre judecătorească, etc.)</p>
                    <p> - certificatul de atestare fiscală emis în vederea înstrăinării</p>
                    <p> - adeverinţa eliberată de asociaţia de proprietari (dacă este cazul)</p>
                    <p> - certificatul de performanţă energetică (dacă este cazul)</p>
                    <p> - adeverinţele eliberate de furnizorii de utilităţi (energie electrică, gaze naturale, etc.) din
                        care să rezulte
                        că nu există datorii către acestea sau ultimele facturi însoţite de dovada plăţii lor</p>
                    <p>În funcție de particularitățile fiecărui contract pot fi necesare și alte documente
                        suplimentare.</p>
                    <p>Toate actele se vor prezenta de către solicitant în ORIGINAL.</p>
                </div>
            </article>
            <article id="8" style={{marginBottom: '50px'}}>
                <input type="checkbox" id="check8"/>
                <label htmlFor="check8" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Contractul de intretinere"
                        number="8"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>
                        Potrivit art.2254 Cod Civil, prin contractul de întreţinere o parte se obligă să efectueze în
                        folosul celeilalte părţi sau al unui anumit terţ prestaţiile necesare întreţinerii şi îngrijirii
                        pentru o anumită durată.
                        Dacă prin contract nu s-a prevăzut durata întreţinerii ori s-a prevăzut numai caracterul viager
                        al acesteia, atunci întreţinerea se datorează pentru toată durata vieţii creditorului
                        întreţinerii.
                        Contractul de întreţinere se încheie în formă autentică, sub sancţiunea nulităţii absolute.</p>
                    <p>Acte necesare pentru încheirea contractului:</p>
                    <p> - actele de identitate ale părţilor, iar în cazul în care părţile sunt reprezentate, procura sau
                        actul din care
                        rezultă reprezentarea</p>
                    <p> - actele de stare civilă ale părţilor şi convenţia matrimonială (dacă este cazul)</p>
                    <p> - actele de proprietate ale bunului ce se înstrăinează (contract de vânzare, donaţie, certificat
                        de
                        moştenitor, proces-verbal de predare-primire, hotărâre judecătorească, etc.)</p>
                    <p> - certificatul de atestare fiscală emis în vederea înstrăinării</p>
                    <p> - adeverinţa eliberată de asociaţia de proprietari (dacă este cazul)</p>
                    <p>- certificatul de performanţă energetică (dacă este cazul)</p>
                    <p>- adeverinţele eliberate de furnizorii de utilităţi (energie electrică, gaze naturale, etc.) din
                        care să rezulte
                        că nu există datorii către acestea sau ultimele facturi însoţite de dovada plăţii lor</p>>
                    <p>În funcție de particularitățile fiecărui contract pot fi necesare și alte documente
                        suplimentare.</p>
                    <p>Toate actele se vor prezenta de către solicitant în ORIGINAL.</p>
                </div>
            </article>
        </main>
    );
};

export default Contracts;
