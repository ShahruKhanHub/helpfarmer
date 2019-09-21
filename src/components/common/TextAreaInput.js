import React from 'react';

const TextAreaInput = ({ label, name, value, onChange }) => {
    return (
        <div class="input-field col s12">
          <textarea name={name} class="materialize-textarea" value={value} onChange={onChange}></textarea>
          <label for={label}>{label}</label>
        </div>
    );
};

export default TextAreaInput;