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

    onSubmit(){
		console.log(this.state.groupName, this.state.description, this.state.location);
	}
    
    render(){
        return(
            <div className="row">
                <h2>Create Group</h2>
                <div className="row">
                    <TextInput
                        label="Group Name"
                        name="groupName"
                        placeholder="Ex - Farm World"
                        value={this.state.groupName}
                        onChange={this.onChange.bind(this)} />
                </div>
                <div className="row">
                    <TextAreaInput
                        label="Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange.bind(this)} />
                </div>
                <div className="row">
                    <TextInput
                        label="Location"
                        name="location"
                        placeholder="Ex - 123 farm st"
                        value={this.state.location}
                        onChange={this.onChange.bind(this)} />
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn" onClick={this.onSubmit.bind(this)}>Submit</button>
                </div>
            </div>
            
        );
    };
};

export default createGroup; 