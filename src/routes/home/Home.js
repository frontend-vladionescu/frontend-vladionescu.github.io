import React from 'react';

import ScrollToTop from '../../components/scroll-to-top/ScrollToTop';

import PhotoCard from '../../components/photo-card/PhotoCard';
import Map from '../../components/map/Map';
import EmployeeCardLarge from '../../components/employee-card-large/EmployeeCardLarge';
import EmployeeCardSmall from '../../components/employee-card-small/EmployeeCardSmall';
import ActivityCard from '../../components/activity-card/ActivityCard'

import styles from './home.module.css';

const Home = () => {
    return (
        <main className={styles.container}>
            <ScrollToTop/>
            <PhotoCard
                photoName="desk.jpg"
                title="Profesionalism, Respect, Confidentialitate"
                cardTitle="Introducere birou notarial"

                cardParagraphs={['Nevoile moderne au nevoie de un serviciu notarial modern. Societatea Profesională Boca și Asociații vă oferă tarife , profesioniști de ajutor și servicii bazate pe cele mai bune metode. Cu alte cuvinte, tot ceea ce are nevoie fiecare client în parte. Soluţionarea situaţiilor legale, grija față de client și confidențialitatea clienților noștrii sunt cel mai important lucru pentru noi, de aceea, pentru a vă satisface toate nevoile vă garantăm toată promtitudinea, profesionalismul, integritatea și respectul nostru. Scopul nostru este să vă oferim cele mai bune servicii notariale, în cel mai convenabil, rentabil și eficient mod. În realizarea acestui scop, notarii noștri vor depune toate eforturile pentru a vă îndeplini aceste promisiuni.']}
                isButtonVisible={false}
            />
            <article className={styles.map__container}>
                <h2>Usor accesibil dinspre parcarea vestica a Centrului Comercial VIVO Cluj-Napoca</h2>
                <Map containerElement={<div style={{height: `calc(500px + 100px)`, width: '100%'}}/>}
                     mapElement={<div style={{height: `100%`}}/>}/>
            </article>
            <EmployeeCardLarge
                name="Aurel Boca"
                title="Notar Public"
                imageName="40173128.jpg"
                reversed
                paragraphs={['Nevoile moderne au nevoie de un serviciu notarial modern. Societatea Profesională Boca și Asociații vă oferă tarife , profesioniști de ajutor și servicii bazate pe cele mai bune metode. Cu alte cuvinte, tot ceea ce are nevoie fiecare client în parte. Soluţionarea situaţiilor legale, grija față de client și confidențialitatea clienților noștrii sunt cel mai important lucru pentru noi, de aceea, pentru a vă satisface toate nevoile vă garantăm toată promtitudinea, profesionalismul, integritatea și respectul nostru. Scopul nostru este să vă oferim cele mai bune servicii notariale, în cel mai convenabil, rentabil și eficient mod. În realizarea acestui scop, notarii noștri vor depune toate eforturile pentru a vă îndeplini aceste promisiuni. Societatea Profesională Notarială Boca și asociații vă garantează:', ]}
            />
            <article className={styles.team__container}>
                <h1>Cunoaste Echipa</h1>
                <div className={styles['team__card--container']}>
                    <EmployeeCardSmall
                        name="Flavia Maxim"
                        title="Consilier juridic"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum iusto laudantium libero nisi officia perferendis totam. Accusamus accusantium atque blanditiis, deserunt eaque, eum minus possimus quo rerum tempore voluptatibus', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum iusto laudantium libero nisi officia perferendis totam. Accusamus accusantium atque blanditiis, deserunt eaque, eum minus possimus quo rerum tempore voluptatibus', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum iusto laudantium libero nisi officia perferendis totam. Accusamus accusantium atque blanditiis, deserunt eaque, eum minus possimus quo rerum tempore voluptatibus"
                    />
                    <EmployeeCardSmall
                        name="Ioana Tomoiaga"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum iusto laudantium libero nisi officia perferendis totam. Accusamus accusantium atque blanditiis, deserunt eaque, eum minus possimus quo rerum tempore voluptatibus', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum iusto laudantium libero nisi officia perferendis totam. Accusamus accusantium atque blanditiis, deserunt eaque, eum minus possimus quo rerum tempore voluptatibus', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum iusto laudantium libero nisi officia perferendis totam. Accusamus accusantium atque blanditiis, deserunt eaque, eum minus possimus quo rerum tempore voluptatibus"
                        title="Consiler juridic"
                    />
                    <EmployeeCardSmall
                        name="Florineta Resteman"
                        title="Secretara"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum iusto laudantium libero nisi officia perferendis totam. Accusamus accusantium atque blanditiis, deserunt eaque, eum minus possimus quo rerum tempore voluptatibus', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum iusto laudantium libero nisi officia perferendis totam. Accusamus accusantium atque blanditiis, deserunt eaque, eum minus possimus quo rerum tempore voluptatibus', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, illum iusto laudantium libero nisi officia perferendis totam. Accusamus accusantium atque blanditiis, deserunt eaque, eum minus possimus quo rerum tempore voluptatibus"
                    />
                </div>
            </article>
            <article className={styles.activity__article}>
                <h2>Domeniile de activitate</h2>
                <div className={styles['activity--card__container']}>
                    <ActivityCard
                        number="1"
                        title="Contracte"
                        description="Detalii despre contractele speciale care pot fi redactate in cadrul biroului notarial Boca si Asociatii"
                        linkUrl="/contracte"
                    />
                    <ActivityCard
                        number="2"
                        title="Succesiuni"
                        description="Procedura succesorala descrisa precum si actele necesare efectuarii acesteia"
                        linkUrl="/succesiuni"
                    />
                    <ActivityCard
                        number="3"
                        title="Divorturi"
                        description="Procedura notariala a divortului si actele necesare efectuarii acesteia"
                        linkUrl="/divort"
                    />
                    <ActivityCard
                        number="4"
                        title="Proceduri"
                        description="Procedurile speciale care pot fi executate in cadrul biroului notarial Boca si Asociatii"
                        linkUrl="/proceduri"
                    />
                </div>
            </article>
        </main>
    );
};

export default Home;
