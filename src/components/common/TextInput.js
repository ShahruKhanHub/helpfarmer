import React from 'react';

const TextInput = ({ name, placeholder, label, value, onChange }) => {
    return (
        <div class="input-field col s6">
            <input
                name={name}
                placeholder={placeholder}
                type="text"
                class="validate"
                value={value}
                onChange={onChange} />
            <label for="groupName">{label}</label>
        </div>
    );
};

export default TextInput;