// InputForm.js
import React from 'react';
import { WrapperInputStyle } from './style';

const InputForm = (props) => {
    const { placeholder = 'Nhập text', ...rests } = props;

    const handleOnChangeInput = (e) => {
        if (typeof props.onChange === 'function') {
            props.onChange(e.target.value);
        }
    };

    return (
        <WrapperInputStyle
            placeholder={placeholder}
            value={props.value}
            {...rests}
            onChange={handleOnChangeInput}
        />
    );
};

export default InputForm;
