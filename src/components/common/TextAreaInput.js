import React from 'react';

const TextAreaInput = ({ label, name, value, onChange }) => {
    return (
        <div className="input-field col s12">
          <textarea name={name} className="materialize-textarea" value={value} onChange={onChange}></textarea>
          <label htmlFor={label}>{label}</label>
        </div>
    );
};

export default TextAreaInput;