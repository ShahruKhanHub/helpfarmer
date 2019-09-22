import React, { Component } from 'react';

class Group extends Component{
    render(){
        return(
            <div className="row">
                <h2>Group A</h2>
                <div className="col s12 m12 l6">
                    <h3>Members</h3>
                    <div className="card amber darken-3">
                        <div className="card-content white-text">
                        <span className="card-title">Member 1</span>
                        </div>
                    </div>
                    <div className="card amber darken-3">
                        <div className="card-content white-text">
                        <span className="card-title">Member 1</span>
                        </div>
                    </div>
                    <div className="card amber darken-3">
                        <div className="card-content white-text">
                        <span className="card-title">Member 1</span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l6">
                    <h3>Proposals</h3>
                    <div className="card cyan lighten-3">
                        <div className="card-content white-text">
                        <div className="card__flex">
                            <span className="card-title">Proposal 1</span>
                            <div>
                                <p className="card__button">Yes</p>
                                <p className="card__button">No</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card cyan lighten-3">
                        <div className="card-content white-text">
                        <div className="card__flex">
                            <span className="card-title">Proposal 2</span>
                            <div>
                                <p className="card__button">Yes</p>
                                <p className="card__button">No</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card cyan lighten-3">
                        <div className="card-content white-text">
                        <div className="card__flex">
                            <span className="card-title">Proposal 3</span>
                            <div>
                                <p className="card__button">Yes</p>
                                <p className="card__button">No</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    };
};

export default Group; 