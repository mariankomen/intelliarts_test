import React from 'react';

import styles from '../../assets/styles/header-tutorial.module.scss'

const HeaderTutorial = () => {
    return (
        <div className={styles.header}>
            <span className={styles.header__text}><h2>Personal expenses management</h2></span>
            <div>
                <p className={styles.header__use}>How to use this app?</p>
                <ul className={styles.header__list}>
                    <li>To add the note, please type: add 2017-04-25 12 USD Jogurt</li>
                    <li>To show all notes, please type: list</li>
                    <li>To clear notes by day: clear 2017-04-25</li>
                    <li>This command should take a list of exchange rates: total PLN</li>
                </ul>
            </div>

        </div>
    );
};

export default HeaderTutorial;