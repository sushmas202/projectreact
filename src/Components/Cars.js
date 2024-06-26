function Garage(props)
{
  const Cars=props.Cars;
  return(
    <div>
        <h1>Garage</h1>
        {Cars.length >0 && <h2>You have {Cars.length} cars in garage</h2>}
    </div>
  )
}

export default Garage;