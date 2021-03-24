import React, {useState} from 'react';

import styles from '../../assets/styles/app.module.scss'

// Components import
import HeaderTutorial from "../header-tutorial/header-tutorial";
import InputComp from "../input-comp/input-comp";

const App = () => {

    const [InputText, setInputText] = useState('')

    const OnInputTextChange = (e) => setInputText(e)

    return (
        <div className={styles.main_block}>
            <HeaderTutorial/>
            <InputComp InputText={InputText}
                       OnInputTextChange={OnInputTextChange}

            />
        </div>
    );
};

export default App;