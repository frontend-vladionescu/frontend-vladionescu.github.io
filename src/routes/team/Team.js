import React from 'react';

import PageTitle from '../../components/page-title/PageTitle';
import PhotoCard from '../../components/photo-card/PhotoCard';

import styles from './team.module.css';

const Team = () => {
    return (
        <main className={styles.container}>
            <PageTitle
                title="Boca & Asociatii"
                subtitle="O echipa plina de profesionalism"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae cupiditate dicta doloremque eos, fuga, maiores natus numquam placeat quia quo quos reiciendis, repellat similique sit suscipit vel? Inventore, nobis!"
            />
            <PhotoCard
                photoName="acte.jpg"
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem explicabo hic porro sint velit."
                cardTitle="Birou notarial"
                cardParagraphs={['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deserunt et facere  facilis in, itaque iure laborum laudantium nostrum optio quasi quis ratione repellendus soluta ullam. Illum, placeat.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deserunt et facere  facilis in, itaque iure laborum laudantium nostrum optio quasi quis ratione repellendus soluta ullam. Illum, placeat.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deserunt et facere  facilis in, itaque iure laborum laudantium nostrum optio quasi quis ratione repellendus soluta ullam. Illum, placeat.']}
            />
        </main>
    );
};

export default Team;
