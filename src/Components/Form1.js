import { useState } from "react"


function  MyForm(){
    const [inputs,setInputs] = useState({});

    const handleChange=(event) =>
    {
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    
    const handleSubmit=(event) =>
    {
        event.preventDefault();
        alert(inputs.username);
        alert(inputs.age);
        alert(inputs.place);
         //alert(`Name is ${inputs.username}  Age is ${inputs.age} and place is ${inputs.place} `);
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