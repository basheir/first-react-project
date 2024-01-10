import logo from './logo.svg';
import './App.css';


const Person = (props) => {
  return (
    <>
      <div className='person'>
        <p>Name: {props.person.name}</p>
        <p>Phone: {props.person.phone}</p>
        <p>Address: {props.person.address}</p>
      </div>
    </>
  )
}


const  App = () =>  {
  const person1  = {
    name: "Bashir", 
    phone: 619756464,
    address: 'Howlwadaag'
  }
  const person2  = {
    name: "Ahmed", 
    phone: 62956666466,
    address: 'Hodan'
  }
  const person3  = {
    name: "Abdirahman", 
    phone: 4875555555,
    address: 'Shangaani'
  }
  return (
    <div className="App">
      <Person person={person1}/>
      <Person person={person2}/>
      <Person person={person3}/>
    </div>
  );
}

export default App;
