import React,{ useState } from "react";
import Button from 'react-bootstrap/Button';
import Name1 from './Name1';

function Login() 
{

    const [usernames, setusernames] = useState({});
    const [showElement, setShowElement] = useState(true);

    const handleChange = (event) => 
    {
        const name = event.target.name;
        const value = event.target.value;
        setusernames(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event) => 
    {
        event.preventDefault();
        setShowElement(false);
    }
    

  return (
    <div>
        {showElement ? <div>

        <form>
            <label>Username: </label>
            <input type='text' name='username' value={usernames.username} onChange={handleChange}/><br/><br/>
            
            <label>Password: </label>
            <input type='password' name='password' value={usernames.password} onChange={handleChange}/><br/><br/>
            
            <Button onClick={handleSubmit} variant="primary">Submit</Button>

        </form>
        </div> : <Name1 n1= {usernames}/>}
        </div>
  )
}

export default Login;