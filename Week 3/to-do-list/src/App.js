import './App.css';
import React, { useState } from 'react';

function App() {
  const [ toDo, setToDO] = useState("")

  const [toDoList, setToDOList] = useState([]);

  // sets current state of my todo
  const handleChange = (e) => {
    setToDO(e.target.value);
  }

  // deletes current item in todolist based off the index position in the array by filtering
  // based on the return being false. return keeps the item that isnt equal to the index
  const handleDelete = (indx) => {
    const updatedList = toDoList.filter((todo, i) => {
      return i !== indx;
    });
    setToDOList(updatedList)
  }
  
  // takes in my event onclicked 
  // creates a new var eqaul to current but with the changed value of complete
  const handleCompleted = (indx) => {
    const updatedList = toDoList.map((todo, i) => {
      if (indx === i) {
        todo.complete = !todo.complete;
        // const updatedTodo = {...todo, complete : !todo.complete};
        // return updatedTodo
      }
      return todo
    });
    setToDOList(updatedList)
  }
  
  // on submitting this prevents page refresh, adds my new todo to my todolist and 
  // then restores to the empty value
  const handleSubmit = (e) => {
    e.preventDefault();
    // if the todo length is empty this cancels the function
    if (toDo.length === 0){
      return;
    }
    // turns my todos into an obect witha stored values
    const myToDo = {
      desciption: toDo,
      complete: false
    }
    // then adds my new todo into the list instead
    setToDOList([...toDoList, myToDo])
    setToDO("")
  }

  return (
    <div className="App">
      <div>
          <h2>Hello World</h2>
        <form onSubmit={handleSubmit}>
          <div>
          <label>To Do:</label>
          <input type="text" onChange={handleChange} value={toDo}/>
          </div>
          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
      <div>
        {/* iterates thru each item in the todo list */}
        {
          toDoList.map((todo, i) => {
            return (
            <div key={i}>
              <input onChange={(event) => {
                handleCompleted(i);
              }} checked={todo.complete} type="checkbox"/>
              <p>{todo.desciption}</p>
              <button onClick={(e) => {handleDelete(i)}}>Delete</button>
            </div>
            ); 
          })
        }
      </div>
    </div>


      
  );
}

export default App;
