
import './App.css'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile"></Device>
      <Device name="Mac"></Device>
      <Student grade="34" score="8"></Student>
      <Student grade={23} score="5"></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Device(props){
  // console.log(props)
  return(
    <h3> This Device: {props.name} {props.price}</h3>
  )
}
function Person(){
  const age = 30;
  const money = 50;
  const obj ={name: 'Sakib', age: 22}
  return <h3>I am {obj.name} with age: {age + money}</h3>
}

// destructuring
const {grade, score} = {grade: '34', score: '8'}

function Student({grade=1, score=0}){
  console.log(grade, score)
  return (
    <div className='student'>
    <h3>I am a student</h3>
    <p>grade: {grade}</p>
    <p>score: {score}</p>
  </div>
  )
  
}
function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '15px'
  }
  return(
    <div style={developerStyle}>
      <h3>Devu Devu</h3>
      <p>coding:</p>
    </div>
  )
}


export default App
