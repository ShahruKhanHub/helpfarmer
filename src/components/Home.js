import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home__background">
          <div className="home__container">
            <h2 className="white-text">Welcome to Help Farm</h2>
            <Link to="/groups" className="home__button">Discover</Link>
            <Link to="/createGroup" className="home__button">Create Group</Link>
          </div>
        </div>
    );
};

export default Home;