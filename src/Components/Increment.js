const Counter=()=>
{
    let count=0;
    const increment=()=>{
        count++;
        console.log(`count:${count}`);
    }
const decrement=()=>{
    count--;
    console.log(`count:${count}`);
    }
    return(
        <div>
            <p>count:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter;