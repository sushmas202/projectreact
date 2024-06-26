function Welcome({inputs}) //function Welcome(props)
{
    const {username}=inputs
    return(
    <div>
        <h1>WELCOME!!!{username}</h1>
        {/* <p>Name:{props.n1.username}<br/>Age:{props.n1.age}</p> */}
    </div>
    );
}
export default Welcome;