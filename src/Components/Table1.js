function Car(props) {
    return (
      <tr>
        <td>{props.id}</td>
        <td>{props.brand}</td>
      </tr>
    );
  }
  
  function Table1() {
    const cars = [
      { id: 1, brand: 'Ford' },
      { id: 2, brand: 'BMW' },
      { id: 3, brand: 'Audi' }
    ];
  
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <table>
         
            <tr>
              <th>ID</th>
              <th>Brand</th>
            </tr>
         
          <tbody>
            {cars.map((car) => (
              <Car key={car.id} id={car.id} brand={car.brand} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
  export default Table1;