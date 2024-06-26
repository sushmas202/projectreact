import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";


function Regform() {
   const [input, setInput] = useState({});


   const history =useNavigate();

   const handleRegistration=(event) =>
{
    const name=event.target.name;
    const value=event.target.value;
    setInput(values => ({...values,[name]:value}))
}

const handleRegistrationSubmit=(event) =>
{
    event.preventDefault();
    history('/Loginform');
}

return(
    <div> 
        <table border='5' height='400' background-color='white' color='blue' width={500} padding='50' >

        <h1>REGISTER</h1>
        <label>Name:
            <input type="text" name="username" value={input.username} onChange={handleRegistration}/>
        <br></br>&nbsp;&nbsp;</label>

        <label>Age:
            <input type="number" name="age" value={input.age} onChange={handleRegistration}/>
        <br></br>&nbsp;</label>

        <label>Place:
            <input type="text" name="place" value={input.place} onChange={handleRegistration}/>
        <br></br></label>

        <label>Department:
            <input type="text" name="dept" value={input.dept} onChange={handleRegistration}/>
        <br></br></label>
        
        <button onClick={handleRegistrationSubmit}>REGISTER</button>
        
        </table>
        
        </div>
    
)
}
export default Regform;