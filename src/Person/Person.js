import React from 'react';
import Shoe from '../Person/Shoe';
import './Person.css';

const person = (props) => {
    let  {name:namey,age} = props;
    
    console.info(props);
    return (
    <div className='Person'>
        <div onClick={props.clickF}>My name is {namey}, my age is {age}. <Shoe /></div>
        <div>{props.children}</div>
        <input type="text" onChange={props.changed} value={namey} />
    </div>
    
    )
}

export default person;