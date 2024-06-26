function Onscreen()
{
    return(
        <div>
            <h1>Onscreen</h1>
        </div>
    )
}

function Offscreen()
{
    return(
        <div>
            <h1>Offscreen</h1>
        </div>
    )
}

function Screen(props){

    const isScreen=props.isScreen;
    return(
        <div>
            <h1>{isScreen ? <Onscreen/> :<Offscreen/>} </h1>
        </div>
    )
//    if(isScreen)
//    {
//      return <Onscreen/>
//    }
//    return <Offscreen/>
}

export default Screen;