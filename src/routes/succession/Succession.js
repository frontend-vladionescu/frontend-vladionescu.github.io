import React from 'react';

import TitleCardWhite from '../../components/title-card-white/TitleCardWhite';

import styles from './succession.module.css';
import PageTitle from '../../components/page-title/PageTitle';

const Succession = () => {
    return (
        <main className={styles.container}>
            <PageTitle
                title="Succesiuni"
            />
            <article style={{marginTop: '50px'}} id="1">
                <input type="checkbox" id="check1"/>
                <label htmlFor="check1" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Ce este moştenirea?"
                        number="1"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p className={styles.text}>
                        Prin moştenire se înţelege transmiterea patrimoniului unei persoane fizice decedate către una
                        sau mai multe persoane în ființă (persoane fizice, juridice, unităţi administrativ-teritoriale,
                        ori statul).
                    </p>
                    <p className={styles.text}>
                        Moștenirea este legală în cazul în care transmiterea patrimoniului succesoral are loc în temeiul
                        legii - la persoanele, în ordinea şi în cotele determinate de lege.
                    </p>
                    <p>
                        Moștenirea este testamentară în cazul şi în măsura în care transmiterea patrimoniului succesoral
                        are loc în temeiul voinței celui care lasă moștenirea, manifestată prin testament.
                        Legea conferă vocaţie (chemare) la moştenire următoarelor persoane:
                        - soţului supravieţuitor al defunctului
                        - rudelor defunctului (ascendenţi, descendenţi, colaterali)
                        - statului sau, după caz, comunei, oraşului sau municipiului.
                    </p>
                    <p>
                        Ascendenţii defunctului sunt părinţii acestuia (ascendenţi privilegiaţi) şi bunicii,
                        străbunicii, etc., fără limită în grad (ascendenţi ordinari).
                        Descendenții defunctului sunt copiii, nepoții, strănepoții acestuia și urmașii lor în linie
                        dreaptă la nesfârșit.
                        Rudele colaterale ale defunctului sunt frații și surorile defunctului, precum și descendenții
                        acestora până la gradul patru inclusiv (colaterali privilegiaţi) şi unchii, mătușile și
                        verișorii primari ai defunctului, frații și surorile bunicilor defunctului, până la gradul patru
                        inclusiv (colaterali ordinari).
                    </p>
                    <p>
                        În ceea ce priveşte persoanele care pot moşteni în baza testamentului lăsat de defunct, de
                        principiu, vocaţia succesorală testamentară poate aparţine oricărei persoane cu capacitate
                        succesorală, adică oricărei persoane care există în momentul deschiderii moştenirii.
                    </p>
                </div>
            </article>
            <article id="2">
                <input type="checkbox" id="check2"/>
                <label htmlFor="check2" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Mostenitor sau succesibil"
                        number="2"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p className={styles.text}>Potrivit Codului civil, succesibilul este acea persoană care îndeplineşte
                        toate condiţiile cerute de lege pentru a putea moşteni, dar care nu şi-a exercitat încă dreptul
                        de opţiune succesorală, în sensul acceptării sau renunţării la moştenire. În schimb,
                        moştenitorul este acela care, pe lângă faptul că îndeplineşte toate condiţiile cerute de lege
                        pentru a putea moşteni, şi-a exercitat dreptul de opţiune succesorală, a îndeplinit procedura
                        prevăzută de lege şi a obţinut un certificat care îi atestă această calitate (certificat de
                        moştenitor sau certificat de calitate de moştenitor).
                    </p>
                </div>
            </article>
            <article id="3">
                <input type="checkbox" id="check3"/>
                <label htmlFor="check3" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Cand si unde se deschide mostenirea"
                        number="3"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p className={styles.text}>
                        Potrivit Codului civil, moştenirea unei persoane se deschide în momentul decesului acesteia, la
                        locul ultimului domiciliu al defunctului, astfel că patrimoniul succesoral şi
                        succesibilii/moştenitorii celui decedat vor fi determinaţi numai în funcţie de această dată.
                    </p>
                    <p>
                        Deschiderea moştenirii nu trebuie confundată cu deschiderea procedurii succesorale notariale,
                        procedură care se deschide ulterior decesului persoanei despre a cărei succesiune este vorba.
                    </p>
                </div>
            </article>
            <article id="4">
                <input type="checkbox" id="check4"/>
                <label htmlFor="check4" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Unde se poate dezbate procedura succesorala"
                        number="4"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>Procedura succesorală notarială se va deschide la cererea oricărei persoane interesate, precum şi
                        a secretarului consiliului local al localităţii în raza căreia se aflau bunurile defunctului la
                        data deschiderii moştenirii.</p>

                    <p>Această procedură este de competenţa notarului public din biroul notarial situat în
                        circumscripţia teritorială a judecătoriei în care defunctul şi-a avut ultimul domiciliu.</p>

                    <p>În cazul moştenirilor succesive, moştenitorii pot alege competenţa oricăruia dintre notarii
                        publici care îşi desfăşoară activitatea într-un birou individual sau într-o societate
                        profesională din circumscripţia teritorială a judecătoriei în care şi-a avut ultimul domiciliu
                        acela dintre autori care a decedat cel din urmă.</p>

                    <p>În cazul comorienţilor (persoane decedate în acelaşi timp, fără a se putea face că una a
                        supravieţuit alteia), compentenţa aparţine primului notar public sesizat, competent să dezbată
                        succesiunea oricăruia dintre decedaţi.</p>

                    <p>
                        În cadrul biroului nostru se pot dezbate proceduri succesorale având ca obiect succesiuni ale
                        persoanelor decedate care au avut ultimul domiciliu în următoarele localităţi:
                    </p>
                    <p>1. Cluj-Napoca</p>
                    <p>2. Floreşti (Floreşti, Luna de Sus, Tăuţi)</p>
                    <p>3. Apahida (Apahida, Bodrog, Câmpeneşti, Corpadea, Dezmir, Pata, Sânicoara, Sub Coastă)</p>
                    <p>4. Baciu (Baciu, Coruşu, Mera, Popeşti, Rădaia, Săliştea Nouă, Sugeag)</p>
                    <p>5. Chinteni (Chinteni, Deuş, Feiurdeni, Măcicaş, Pădureni, Satu Lung, Săliştea Veche, Sânmartin,
                        Vechea)</p>
                    <p>6. Cojocna (Cojocna, Boju, Boj-Cătun, Cara, Huci, Iuriu de Câmpie, Morişti, Straja)</p>
                    <p>7. Feleacu (Feleacu, Casele Miceşti, Gheorgheni, Sărădiş, Vâlcele)</p>
                    <p>8. Sânpaul (Sânpaul, Berindu, Mihaieşti, Şardu, Sumurduc, Topa Mică)</p>
                    <p>Dacă ultimul domiciliu al defunctului nu este cunoscut sau nu se află pe teritoriul României,
                        moştenirea se deschide la locul din ţară aflat în circumscripţia notarului public celui dintâi
                        sesizat, cu condiţia ca în această circumscripţie să existe cel puţin un bun imobil al celui
                        care lasă moştenirea. În cazul în care în patrimoniul succesoral nu există bunuri imobile, locul
                        deschiderii moştenirii este în circumscripţia notarului public celui dintâi sesizat, cu condiţia
                        ca în această circumscripţie să se afle bunuri mobile ale celui ce lasă moştenirea. Atunci când
                        în patrimoniul succesoral nu există bunuri situate în România, locul deschiderii moştenirii este
                        în circumscripţia notarului public celui dintâi sesizat.</p>
                </div>
            </article>
            <article id="5">
                <input type="checkbox" id="check5"/>
                <label htmlFor="check5" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Termenul de optiune succesorala"
                        number="5"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p className={styles.text}>
                        Potrivit art.1103 Cod civil, dreptul de optiune succesorală se exercită într-un an de la data
                        deschiderii moștenirii.
                    </p>

                    <p>
                        Persoanele chemate la moștenire în temeiul legii sau al voinței defunctului (testament) au
                        opțiunea de a accepta moștenirea sau de a renunța la ea, în termen de 1 an de la data
                        deschiderii moștenirii, adică de la data decesului celui care lasă moștenirea.
                    </p>
                    <p>
                        Nici o persoană nu poate fi obligată să accepte o moștenire ce i se cuvine, însă, odată ce
                        moştenirea a fost acceptată, nu se mai poate reveni asupra opţiunii, întrucât acceptarea are ca
                        efect consolidarea transmiterii moștenirii, fiind astfel irevocabilă.
                    </p>
                </div>
            </article>
            <article id="6">
                <input type="checkbox" id="check6"/>
                <label htmlFor="check6" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Acte necesare"
                        number="6"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>Pentru deschiderea procedurii succesorale sunt necesare următoarele acte:</p>

                    <p>- certificatul de deces al defunctului;</p>
                    <p>- certificatul de căsătorie (în cazul în care defunctul era căsătorit la data decesului), sau
                        certificatul de
                        divorţ ori hotărârea judecătorească prin care a fost pronunţat divorţul (dacă este cazul)
                    </p>
                    <p>- actele de identitate ale moştenitorilor, iar dacă aceştia sunt reprezentaţi, procura sau actul
                        din
                        care
                        rezultă reprezentarea</p>
                    <p>- actele de stare civilă ale moştenitorilor – certificat de naştere, certificat de căsătorie,
                        certificat de
                        divorţ, hotărâre judecătorească prin care a fost pronunţat divorţul (dacă este cazul)</p>
                    <p> - actele de proprietate ale bunurilor mobile sau imobile care alcătuiesc masa succesorală
                        (contract
                        de
                        vânzare, contract de donaţie, contract de schimb, act de dare in plată, certificat de
                        mostenitor,
                        titlu de
                        proprietate, adeverinţe, certificate, etc.)</p>
                    <p> - certificatul de atestare fiscală emis în vederea dezbaterii succesiunii</p>
                    <p> - actele de identitate ale martorilor</p>
                    <p> - testamentul (dacă este cazul)</p>
                    <p> - declaraţiile de opţiune succesorală (dacă este cazul)</p>

                    <p> În funcție de particularitățile fiecărui dosar succesoral pot fi necesare și alte documente
                        suplimentare.</p>
                </div>
            </article>
        </main>
    );
};

export default Succession;
