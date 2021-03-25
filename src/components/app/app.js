import React, {useState, useEffect} from 'react';

import styles from '../../assets/styles/app.module.scss'

import axios from "axios";
// Components import
import HeaderTutorial from "../header-tutorial/header-tutorial";
import InputComp from "../input-comp/input-comp";
import Record from "../record/record";

const App = () => {

    // const [ToggleInputText, setToggleInputText] = useState('') //On change, update this const
    const [InputText, setInputText] = useState('') //After click update this, for next using
    const [state, setState] = useState([])
    const [stateForMap, setStateForMap] = useState([])
    const [ToValute, setToValute] = useState([])
    const str = InputText.split(' ')
    const [UserCommand, ...StringWithoutCommand] = str
    var [date, price, valuta, ...productName] = StringWithoutCommand

    let ID = () => '_' + Math.random().toString(36).substr(2, 9)

    useEffect(() => {
        axios
            .get(`https://free.currconv.com/api/v7/currencies?apiKey=${process.env.REACT_APP_KEY}`)
            .then()
    })

    const OnInputTextChange = (e) => {
        setInputText(e);
        console.log(InputText)
    }
    const [hint, setHint] = useState(false)

    const CheckDate = (cond) => {
        if (!cond[1].match(/^\d{4}[-]\d{2}[-]\d{2}$/)) {
            setHint(false)
            return false;
        }
        else {
            setHint(true)
            return true;
        }
    }
    const AddElement = () => {
        let RecordItem = {
            id: ID(),
            command: UserCommand,
            date: date,
            price: price,
            valuta: valuta.toUpperCase(),
            productName: productName
        }
        setInputText('')
        return setState([...state, RecordItem])
    }

    const Clear = () => {
        let cleared_arr = state.filter(item => item.date !== date)
        setInputText('')
        setState([...cleared_arr])
    }

    const List = () => {
        let sorted_arr = state.sort(function (a,b){
            return parseInt(a.date) - parseInt(b.date)
        })
        setStateForMap([...sorted_arr])
    }

    const Total = () => {

    }

    const CheckFunction = () => {
        if(UserCommand === 'add' && (CheckDate(str)) && (!isNaN(price)) && (valuta.length === 3)){
            AddElement()
        } else if( UserCommand === 'clear' && (CheckDate(str))){
            Clear()
        } else if(UserCommand === 'list'){
            List()
        } else {
            alert("Bad")
        }
    }

    const Zapis = stateForMap.map((item) => <Record date={item.date}
                                              price={item.price}
                                              valuta={item.valuta}
                                              productName={item.productName}
                                              key={item.id}
                                              />)
    return (
        <div className={styles.main_block}>
            <HeaderTutorial/>
            <InputComp InputText={InputText}
                       OnInputTextChange={OnInputTextChange}
                       CheckFunction={CheckFunction}
                       hint={hint}
            />


            {Zapis}
        </div>
    );
};

export default App;