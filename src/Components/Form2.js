import { useState } from "react"
import Welcome from "./Welcome";


function  MyForm(){
    const [inputs,setInputs] = useState({});
    const [showelement,setShowelement] = useState(true);


    const handleChange=(event) =>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    
    const handleSubmit=(event) =>
    {
        event.preventDefault();
        setShowelement(false);
    }

    return(
        <div>
            {showelement ? <div>
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
            </div>:<Welcome/>}</div>
        
    )
}
export default MyForm;