import React from 'react';
import Input from './Input';
import Button from './Button';

let isRegister = false;

const Form = () => (
    <form className="form">
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password" />
        {!isRegister ?(
          <div>
            <Input type="password" placeholder="Confirm Password"/> 
            <Button text="Register"/> 
          </div>) 
          : <Button text="Login"/>
          } 
      </form>
);

export default Form;