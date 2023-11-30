import React from 'react';
import Hello from './Hello';
import { robots } from './robots';
import './Hello.css';

const HelloList = () => {
  return (
  <div>
    {
    robots.map((user, i) => {
    return (
      <div  className="robot-container">
          <Hello 
          key={i} 
          id={robots[i].id}
          name={robots[i].name} 
          email={robots[i].email} 
          />
      </div>
    );
  })
  }
  </div>
)};

export default HelloList;
