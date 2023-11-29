import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Hello from './Hello';
// import CardList from './CardList'
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import HelloList from './HelloList'
// import { robots } from './robots';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello greeting={'Hello React Ninja' }/> */}
    {/* <CardList robots = {robots} /> */}
    <HelloList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();