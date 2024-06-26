import { useState } from "react"
import {useNavigate} from "react-router-dom";

function  MyForm(){
    const [inputs,setInputs] = useState({});
  

    const  history=useNavigate();

    const handleChange=(event) =>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    
    const handleSubmit=(event) =>
    {
        event.preventDefault();
        history('/Welcome');  
        
    }

    return(
        <div>
            
            <label>Enter your name:
                <input type="text" name="username" value={inputs.username} onChange={handleChange}/>
            </label>
            <label>Enter your age:
                <input type="number" name="age" value={inputs.age} onChange={handleChange}/>
            </label>
            <label>Enter your Place:
                <input type="text" name="place" value={inputs.place} onChange={handleChange}/>
            </label>
            <button onClick={handleSubmit}>submit</button>
            </div>
        
    )
}
export default MyForm;