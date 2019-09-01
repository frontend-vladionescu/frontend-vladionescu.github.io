import React from 'react';

import TitleCardWhite from '../../components/title-card-white/TitleCardWhite';

import styles from './procedures.module.css';
import PageTitle from '../../components/page-title/PageTitle';

const Procedures = () => {
    return (
        <main className={styles.container}>
            <PageTitle
                title="Succesiuni"
            />
            <article style={{marginTop: '50px'}} id="1">
                <input type="checkbox" id="check1"/>
                <label htmlFor="check1" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Leglizarea copiilor de pe inscrisuri"
                        number="1"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>Legalizarea copiei unui înscris reprezintă modalitatea prin care reproducerea fidelă a
                        înscrisului original devine generatoare de efecte juridice, prin această procedură copia
                        înscrisului primind o forţă probantă superioară unei copii simple.</p>
                    <p>ÎNSCRISUL a cărui copie se legalizează trebuie să îndeplinească următoarele CONDIŢII:</p>
                    <p>- să fie original (autentic sau sub semnătură privată)</p>
                    <p>- să nu conţină particularităţi (corecturi, ştersături, adăugiri, etc) neconfirmate prin
                        semnătura şi sigiliul autorităţii care le-a întocmit sau, după caz, prin semnătura
                        părţilor</p>
                    <p>- actele normative să permită instrumentarea copiei legalizate de către notarul public</p>
                    <p>Se pot legaliza doar copiile unui înscris, a unui document al cărui conţinut este asumat de
                        către o persoană prin intermediul unei semnături. În consecinţă, nu se vor putea legaliza
                        copiile unor fotografii sau pagini de carte.</p>
                    <p>Nu se pot elibera copii legalizate de pe înscrisurile care conţin corecturi, ştersături,
                        adăugări, cuvinte tăiate sau alte particularităţi, dacă nu sunt confirmate prin semnătura şi
                        sigiliul autorităţii care le-a întocmit sau, după caz, semnătura părţilor. În cazul în care
                        înscrisul prezintă alte particularităţi care nu afectează conţinutul sau forma actului ori
                        acesta este plastifiat, în încheierea de legalizare a copiei se fac menţiunile
                        corespunzătoare acestor particularităţi.</p>
                    <p>De asemenea, nu se pot legaliza copii de pe alte copii legalizate şi nici de pe înscrisurile
                        prevăzute de acte normative care nu permit instrumentarea copiei legalizate (ex: hotărârea
                        judecătorească, încheierea finală din cadrul procedurii succesorale).</p>
                    <p>ACTE NECESARE:</p>
                    <p>- înscrisul original a cărui copie legalizată se solicită</p>
                </div>
            </article>
            <article id="2">
                <input type="checkbox" id="check2"/>
                <label htmlFor="check2" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Legalizarea semnaturilor si a sigiliilor"
                        number="2"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p>
                        Legalizarea semnăturilor şi a sigiliilor este procedura prin care notarul public confirmă
                        veridicitatea unei semnături sau sigiliu ca aparţinând unei persoane determinate, care a
                        subscris toate exemplarele înscrisului în faţa notarului public ori a aplicat sigiliul pe
                        suportul prevăzut pentru aceasta.
                    </p>
                    <p> Se poate legaliza semnătura părţilor doar pe înscrisurile pentru care legea nu cere forma
                        autentică ca o condiţie de valabilitate a actului.</p>
                    <p> Încheierea de legalizare de semnătură este un înscris autentic, însă, prin natura procedurii,
                        aceasta NU are aptitudinea de a conferi AUTENTICITATE actului juridic încheiat e părţi, acest
                        înscris rămânând, de principiu, un înscris sub semnătură privată, cu forţa specifică a
                        acestuia.</p>
                    <p> Pentru îndeplinirea acestei proceduri, partea interesată se va prezenta PERSONAL la biroul
                        notarial, iar înscrisul se va prezenta notarului public NESEMNAT.</p>
                    <p> În ipoteza în care PĂRŢILE NU POT SEMNA, procedura legalizării semnăturii NU se poate
                        instrumenta.</p>
                    <p> În situaţia unui act juridic cu mai multe părţi, această procedură a legalizării semnăturii se
                        poate instrumenta şi pentru o singură persoană, cu condiţia îndeplinirii condiţiilor prevăzute
                        mai sus.</p>
                    <p> La cererea părţii se poate legaliza şi SPECIMENUL DE SEMNĂTURĂ al persoanei ce se va prezenta
                        personal la sediul biroului notarial şi care va semna în faţa notarului public.</p>
                    <p> Pentru legalizarea SIGILIULUI, partea interesată îl va prezenta notarului public spre
                        verificare, după care va aplica sigiliul în faţa noatrului public, pe suportul material
                        prezentat de parte în acest scop.</p>

                    <p> ACTE NECESARE:</p>
                    <p> - actele de identitate ale părţilor</p>
                    <p>- înscrisul pe care părţile doresc a li se legaliza semnătura</p>
                    <p>- sigiliul a cărui amprentă se doreşte legalizată</p>
                </div>
            </article>
            <article id="3">
                <input type="checkbox" id="check3"/>
                <label htmlFor="check3" className={styles.panel__label}>
                    <TitleCardWhite
                        title="Dare de data certa inscrisurilor"
                        number="3"
                    />
                </label>
                <div className={styles.panel__content}>
                    <p> Darea de dată certă este procedura prin care se fixează momentul în raport cu care existenţa
                        înscrisului devine certă, incontestabilă faţă de alte persoane. Data certă nu este obligatoriu
                        data întocmirii înscrisului, acesta putând fi încheiat la o dată anterioară, dar incertă.</p>
                    <p> Înscrisul căruia urmează a i se da dată certă se va întocmi în numărul de exemplare solicitat de
                        parte.</p>
                    <p> Pentru îndeplinirea acestei proceduri nu este necesară stabilirea identităţii, domiciliului şi
                        capacităţii părţilor, astfel că înscrisul căruia urmează a i se da dată certă poate aparţine ori
                        nu persoanei care solicită procedura.</p>
                    <p> Darea de dată certă NU ESTE POSIBILĂ în situaţia în care este vorba despre un înscris sub
                        semnătură privată care constată o operaţiune juridică ce impune, pentru validitate, îndeplinirea
                        unei alte proceduri notariale.</p>
                    <p> ACTE NECESARE:</p>
                    <p> - înscrisul sub semnătură privată căruia urmează a i se da dată certă</p>
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
                    <p>Procedura certificării unor fapte reprezintă modalitatea prin care un anumit fapt este confirmat
                        de notarul public, care a luat cunoştinţă de acesta prin propriile sale simţuri.</p>

                    <p> Notarul public POATE CERTIFICA următoarele:</p>

                    <p>- faptul că o persoană se află în viaţă</p>
                    <p>- faptul că o persoană se află într-un anumit loc</p>
                    <p>- faptul că persoana din fotografie este aceeaşi cu persoana care cere certificarea</p>
                    <p>- faptul că o persoană, ca urmare a unei somaţii sau notificări, s-a prezentat ori nu într-o
                        anumită zi şi la o anumită oră într-un anumit loc, precum şi declaraţia acesteia</p>
                    <p>- rezultatele tombolelor, tragerilor la sorţi, concursurilor, loteriilor publicitare, organizate
                        de entităţi autorizate în conformitate cu acte normative speciale, dacă nu sunt date, prin lege,
                        în competenţa altor organe</p>
                    <p>- certificarea site-urilor, programelor informatice sau a altor produse, dacă nu sunt date, prin
                        lege, în competenţa altor organe</p>
                    <p>- certificarea altor fapte care nu sunt date în competenţa exclusivă a altor organe</p>
                    <p>- certificarea proceselor-verbale sau hotărârilor organelor colegiale ale oricăror forme
                        asociative, printr-o încheiere în care se vor menţiona data şi locul întrunirii, precum şi
                        faptul semnării procesului-verbal sau a hotărârii de către unul ori mai mulţi dintre
                        participanţi</p>

                    <p>Notarul public NU poate fi sesizat pentru constatarea existenţei ori a inexistenţei unui
                        drept.</p>

                    <p>ACTE NECESARE ( în funcţie de faptul care se certifică)</p>
                    <p>- actul de identitate</p>
                    <p>- o fotografie de dată recentă (în numărul de exemplare câte se solicită a fi certificate, plus
                        unul pentru arhiva biroului notarial)</p>
                    <p>- un exemplar al somaţiei/notificării, împreună cu dovada comunicării
                        acesteia către persoanele interesate (acest document nu este necesar dacă
                        printr-un act autentic părţile au convenit anterior auspra tuturor elementelor
                        care le-ar fi fost comunicate prin somaţie/notificare)</p>
                    <p>- varianta tipărită a programului informatic ce se doreşte a fi certificat
                        (varianta tipărită a codificării în limbajul de programare şi varianta tipărită
                        a formei grafice)</p>
                    <p>- produsul a cărui certificare se solicită, însoţit de fotografii ale acestuia,
                        semnate de către solicitant</p>
                    <p>- procesul-verbal sau hotărârea organului colegial.</p>
                </div>
            </article>
        </main>
    );
};

export default Procedures;
