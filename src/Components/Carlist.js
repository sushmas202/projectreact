function Car(props)
{
   return<li>I am a {props.brand} </li>
}

function Garage()
{
 const Car=[{id:1, brand:"BMW"},{id:2,brand:"Ford"},{id:3,brand:"Audi"},{id:4,brand:"Benz"}]   

 return(
    <div>
        <h1>Garage</h1>
        <ul>
            {Car.map((Car) => <Car key={Car.id} brand={Car.brand} id={Car.id}/> )}
        </ul>
    </div>
 )
}

export default Garage;

 {/* <Route path='/Count' element={<Counter/>}/> */}
         {/* <Route path='/' element={<Regform/>}/> */}
         {/* <Route path='/Loginform' element={<Loginform/>}/> */}
         {/* <Route path='/Success' element={<Success/>}/> */}
          {/* <Route path='/Routing' element={<MyForm/>}/> */}
      {/* <Route path='/Welcome' element={<Welcome/>}/> */}

         // <div>
        // </div>
   // <Garage Cars={['ford', 'bmw','audi','innova']}/>
    //<Screen isScreen={false}/>
    //<Car n1={6} n2={4}/>


// import Table from './Components/Table';
// import Welcome from './Components/Welcome';
// import MyForm from './Components/Routing';
// import Counter from './Components/Increment';
// import Student from './Components/Table2';
// import Regform from './Components/Regform';
// import Success from './Components/Success';
// import Loginform from './Components/Loginform';

// import Counter from './Components/Count';
// import Welcome from './Components/Name';
// import Table from './Components/Table';
// import Table1 from './Components/Table1';