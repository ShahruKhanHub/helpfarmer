import React, { Component } from 'react';

class createGroup extends Component{
    render(){
        return(
            <div>
                <h2>Create Group</h2>
                <div class="input-field col s6">
                    <input placeholder="Group Name" type="text" />
                    <label for="groupName">Group Name</label>
                </div>
            </div>
            
        );
    };
};

export default createGroup; 