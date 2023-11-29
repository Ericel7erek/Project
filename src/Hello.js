import React from 'react';
import './Hello.css';
import 'tachyons';


const Hello = ({name, email, id}) => {
        return (
        <div className='tc'>
        {/* <h1>Hello World</h1> */}
        {/* <p>Welcome to react</p> */}
        {/* <p>{this.props.greeting}</p> */}
        <div className='flex items-center'>
        <img className='ba dib mb4 br-100 h3 w3 tl' src={`https://robohash.org/${id}?200x200`} alt={name} width={50}/>
        <p className='robot-details'>My name is {name} and my email is {email}</p>
        </div>
        </div>
        );
   };
export default Hello;