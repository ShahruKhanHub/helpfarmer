import React, { Component } from 'react';

class Group extends Component{
    render(){
        return(
            <div className="row">
                <h2>Group A</h2>
                <div className="col s12 m12 l5">
                    <h3>Members</h3>
                    <div className="card grey darken-3">
                        <div className="card-content white-text">
                        <span className="card-title">Surya Ram</span>
                        </div>
                    </div>
                    <div className="card grey darken-3">
                        <div className="card-content white-text">
                        <span className="card-title">Siva Mani</span>
                        </div>
                    </div>
                    <div className="card grey darken-3">
                        <div className="card-content white-text">
                        <span className="card-title">Suri Ravi</span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l5">
                    <h3>Proposals</h3>
                    <div className="card grey darken-3">
                        <div className="card-content white-text">
                        <div className="card__flex">
                            <span className="card-title">Proposal 1</span>
                            <div>
                                <button className="card__button"> &#10004; </button>
                                <button className="card__button"> &#10005; </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card grey darken-3">
                        <div className="card-content white-text">
                        <div className="card__flex">
                            <span className="card-title">Proposal 1</span>
                            <div>
                                <button className="card__button"> &#10004; </button>
                                <button className="card__button"> &#10005; </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card grey darken-3">
                        <div className="card-content white-text">
                        <div className="card__flex">
                            <span className="card-title">Proposal 3</span>
                            <div>
                                <button className="card__button"> &#10004; </button>
                                <button className="card__button"> &#10005; </button>
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