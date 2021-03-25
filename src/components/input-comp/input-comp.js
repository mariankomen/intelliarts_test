import React, {useState} from 'react';

import style from '../../assets/styles/input-comp.module.scss'
import Tooltip from '@material-ui/core/Tooltip';

const InputComp = (props) => {
    const [border, setBorder] = useState('border: 4px solid yellow')

    let titleText

    if(props.hint){
        titleText = ''
    } else{
        titleText = 'Please enter correct date'
    }

    return (
        <div className={style.main}>
            <Tooltip title={titleText}

            >
            <input type={'text'}
                   style={{border}}
                   value={props.InputText}
                   onChange={ e => props.OnInputTextChange(e.target.value)}
            />
            </Tooltip>
            <button
                onClick={() => {
                    props.CheckFunction()
                }}
            >Run</button>
        </div>
    );
};

export default InputComp;