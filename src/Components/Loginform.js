import  { useState } from 'react';
import Success from './Success';


function Loginform() {
   const [input, setInput] = useState({});
   const [showelement,setShowelement] = useState(true);


   const handleLogin=(event) =>
{
    const name=event.target.name;
    const value=event.target.value;
    setInput(values => ({...values,[name]:value}))
}

const handleLoginSubmit=(event) =>
{
    event.preventDefault();
    setShowelement(false);
}

return(
    <div>
        {showelement ? <div>
        <table border='5'>
        <h1>LOGIN</h1>
        <label>Name: 
            <input type="text" name="username" value={input.username} onChange={handleLogin}/>
        <br></br></label>

        <label>E-Mail:
            <input type="email" name="email" value={input.email} onChange={handleLogin}/>
        <br></br></label>

        <label>Password:
            <input type="password" name="password" value={input.password} onChange={handleLogin}/>
        <br></br></label>
        
        <button  onClick={handleLoginSubmit}>LOGIN</button>
    
        </table>
        </div>:<Success inputs={input}/>}
       
       
       </div>
    
)
}
export default Loginform;