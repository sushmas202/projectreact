function Car(props)
{
    let sum=props.n1+props.n2;

    return(
        <div>
            <h1>sum={sum <10 ? "Sum is lesser":"Sum is greater"}</h1>
        </div>
    )
}
export default Car;