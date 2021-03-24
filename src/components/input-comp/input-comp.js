import React from 'react';

import style from '../../assets/styles/input-comp.module.scss'

const InputComp = (props) => {
    return (
        <div className={style.main}>
            <input type={'text'}
                   value={props.InputText}
                   onChange={ e => props.OnInputTextChange(e.target.value)}
            />
            <button
                onClick={() => {
                    console.log(props.InputText)
                }}
            >Run</button>
        </div>
    );
};

export default InputComp;