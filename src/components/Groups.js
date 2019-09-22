import React, { Component } from 'react';
import { groupData } from './data';

class Groups extends Component{
    state = {
        data: groupData
    };

    render(){
        return(
            <div className="row">
                {this.state.data.map(group => {
                    return(
                        <div className="col s12 m12 l6">
                            <div className="card blue-grey darken-1" onClick={() => this.props.history.push('/groups/a')}>
                                <div className="card-content white-text">
                                <span className="card-title">{group}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>  
        );
    };
};

export default Groups; 