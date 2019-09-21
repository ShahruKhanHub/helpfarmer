import React from 'react';

const TextAreaInput = ({ label }) => {
    return (
        <div class="input-field col s12">
          <textarea class="materialize-textarea"></textarea>
          <label for={label}>{label}</label>
        </div>
    );
};

export default TextAreaInput;