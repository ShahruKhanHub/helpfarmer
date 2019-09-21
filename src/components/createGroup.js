import React, { Component } from 'react';

import TextInput from './common/TextInput';
import TextAreaInput from './common/TextAreaInput';

class createGroup extends Component{
    state = {
        groupName: "",
        description: "",
        location: ""
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    render(){
        return(
            <div>
                <h2>Create Group</h2>
                <TextInput
                    label="Group Name"
                    name="groupName"
                    placeholder="Ex - Farm World"
                    value={this.state.groupName}
                    onChange={this.onChange.bind(this)} />
                <TextAreaInput
                    label="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange.bind(this)} />
                <TextInput
                    label="Location"
                    name="location"
                    placeholder="Ex - 123 farm st"
                    value={this.state.location}
                    onChange={this.onChange.bind(this)} />
            </div>
            
        );
    };
};

export default createGroup; 