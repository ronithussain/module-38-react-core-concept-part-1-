
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singer'
import BookStore from './BookStore'
import Books from './book'

function App() {
      const actors = ["Bappa raz", "Salman shah", "Rubel", "Maruf", "Shakil khan"]

      const books=[
        {id:1, name:'Physics', price:100},
        {id:2, name:'Chemistry', price:120},
        {id:3, name:'Biology', price:130},
        {id:4, name:'Mathematics', price:140},
        {id:5, name:'Hair math', price:150}
      ]

      const singers =[
        {id: 1, name:'Arijit Sing', age:32},
        {id: 2, name:'Honey Sing', age:30},
        {id: 3, name:'Atif Aslam', age:35},
        {id: 4, name:'Jit Ganguli', age:40},
        {id: 5, name:'Ashes ', age:38}
      ]

  return (
    <>
      <h2>Vite + React</h2>
      <BookStore books={books}></BookStore>





      {/* {
        bookStores.map(book => <BookStore books={book}></BookStore>)
      } */}



      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }



      <Actor name='sakib khan'></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }




      {/* <Todo
        task='Learn React'
        isDone={true}></Todo>
      <Todo
        task='Explore Core Concepts'
        isDone={false}></Todo>
      <Todo
        task='Try JSX'
        isDone={true}></Todo> */}



      {/* <Person></Person>
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile"></Device>
      <Device name="Mac"></Device>
      <Student grade="34" score="8"></Student>
      <Student grade={23} score="5"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props)
  return (
    <h3> This Device: {props.name} {props.price}</h3>
  )
}
function Person() {
  const age = 30;
  const money = 50;
  const obj = { name: 'Sakib', age: 22 }
  return <h3>I am {obj.name} with age: {age + money}</h3>
}

// destructuring
const { grade, score } = { grade: '34', score: '8' }

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score)
  return (
    <div className='student'>
      <h3>I am a student</h3>
      <p>grade: {grade}</p>
      <p>score: {score}</p>
    </div>
  )

}
function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '15px'
  }
  return (
    <div style={developerStyle}>
      <h3>Devu Devu</h3>
      <p>coding:</p>
    </div>
  )
}


export default App
