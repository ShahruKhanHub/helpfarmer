import React from 'react';

const TextInput = ({ name, label, value, onChange }) => {
    return (
        <div className="input-field col s6">
            <input
                name={name}
                type="text"
                className="validate"
                value={value}
                onChange={onChange} />
            <label htmlFor="groupName">{label}</label>
        </div>
    );
};

export default TextInput;