import React, { Component } from 'react';

class Groups extends Component{
    render(){
        return(
            <div className="row">
                <div className="col s12 m12 l6">
                    <div className="card blue-grey darken-1" onClick={() => this.props.history.push('/')}>
                        <div className="card-content white-text">
                        <span className="card-title">Group A</span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l6">
                    <div className="card blue-grey darken-1" onClick={() => this.props.history.push('/')}>
                        <div className="card-content white-text">
                        <span className="card-title">Group B</span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l6">
                    <div className="card blue-grey darken-1" onClick={() => this.props.history.push('/')}>
                        <div className="card-content white-text">
                        <span className="card-title">Group C</span>
                        </div>
                    </div>
                </div>
            </div>  
        );
    };
};

export default Groups; 