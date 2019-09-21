import React from 'react';

const TextInput = ({ placeholder, label }) => {
    return (
        <div class="input-field col s6">
            <input placeholder={placeholder} type="text" class="validate" />
            <label for="groupName">{label}</label>
        </div>
    );
};

export default TextInput;