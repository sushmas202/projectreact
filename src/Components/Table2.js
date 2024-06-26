function StdDetails(props)
{
    return(
        <tr>
            <td>{props.Name}</td>
            <td>{props.Age}</td>
        </tr>
    )
}

function Student()
{
    const Students=[{id:1,Name:'Jino',Age:22},{id:2,Name:'Anu',Age:22},{id:3,Name:'Sush',Age:22},{id:4,Name:'Blessy',Age:22}]


    return(
        <div>
            <table border={1}>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                </tr>

                <tr>
                    <td>{Students.map((stdnt)=> <StdDetails key={stdnt.id} Name={stdnt.id}/>)}</td>
                    <td>{Students.map((stdnt)=> <StdDetails key={stdnt.id} Name={stdnt.Name}/>)}</td>
                    <td>{Students.map((stdnt)=> <StdDetails key={stdnt.id}Age={stdnt.Age}/>)}</td>
                </tr>

            </table>
        </div>
    )
}
export default Student;