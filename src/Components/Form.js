import { useState } from "react";

function MyForm()
{
    const [name, setName]=useState("");
    const [age, setAge]=useState("");
    const handleSubmit =(event) =>{
        event.preventDefault();
        alert (`The name you entered was: ${name}`);
        alert(`The age you entered was: ${age}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>Age:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <input type="submit"/>
        </form>
    )
}
 export default MyForm;