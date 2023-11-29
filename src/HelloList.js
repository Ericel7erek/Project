
// HelloList.js
import React from 'react';
import Hello from './Hello';
import { robots } from './robots';
import './Hello.css';

const HelloList = () => {
  const robotArray = robots.map((user, i) => {
    return (
      <div key={i} className="robot-container">
        <Hello id={robots[i].id} name={robots[i].name} email={robots[i].email} />
      </div>
    );
  });

  return <div>{robotArray}</div>;
};

export default HelloList;
