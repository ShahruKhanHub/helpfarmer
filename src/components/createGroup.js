import React, { Component } from 'react';

import TextInput from './common/TextInput';
import TextAreaInput from './common/TextAreaInput';

class createGroup extends Component{
    render(){
        return(
            <div>
                <h2>Create Group</h2>
                <TextInput
                    label="Group Name"
                    placeholder="Ex - Farm World" />
                <TextAreaInput
                    label="Description" />
                <TextInput
                    label="Location"
                    placeholder="Ex - 123 farm st" />
            </div>
            
        );
    };
};

export default createGroup; 