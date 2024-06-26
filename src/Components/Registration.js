import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Registration() {

    const [inputs,setInputs] = useState({});
    const history = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(`Name is ${inputs.Username}  Age is ${inputs.age} and place is ${inputs.place} `);
        history('/login')
    }

  return (
    <div style={{textAlign: 'center', marginLeft: '550px', marginRight: '550px' , marginTop: '200px', backgroundColor: '#7ABA78'}}>
        <h1 style={{backgroundColor: '#0A6847'}}>Registration Form</h1>

        <form>
            <label>Name:</label> 
            <input type='text' name='Username' value={inputs.Username} onChange={handleChange} style={{backgroundColor:'#F6E9B2'}}/><br/><br/>

            <label>Age: </label>
            <input type='number' name='age' value={inputs.age} onChange={handleChange} style={{backgroundColor:'#F6E9B2'}}/><br/><br/>

            <label>Place:</label>
             <input type='text' name='place' value={inputs.place} onChange={handleChange} style={{backgroundColor:'#F6E9B2'}}/><br/><br/>
             
             <Button variant="success" onClick={handleSubmit}>Submit </Button>{' '}
             
            
            
        </form>
    </div>
  )
}

export default Registration;