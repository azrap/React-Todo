import React from 'react';
 import Todo from './components/TodoComponents/Todo';

const Todos = [
  {
    task: 'do the prework',
    id: 1,
    completed: false
  },
  {
    task: 'attend live lecture',
    id: 2,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(){

      super();
    
      this.state = {
        todosOnState: Todos,
// the below empty strings are what gets populated
        todo: {
          task:'',
          id: Date.now(),
          completed: false
        }

      }


// below function adds the submitted form item to the todo list by updating the state with an array comprising of the current state + the newly added todo item. 
}

handleChanges = event => {
  console.log(event.target.name);
  this.setState({
    todo: {
      ...this.state.todo,
      [event.target.name]: event.target.value
    }
  });
};

addTodo = event => {
  event.preventDefault();
  this.setState({
    todosOnState: [...this.state.todosOnState, this.state.todo],
    todo: {}
  });
};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
          {/* not sure what the below functional component is doing need to find out */}
        <div className="todo-list">
          {this.state.todosOnState.map (eleTodo => (
            <Todo todo={eleTodo} key={eleTodo.id}/> 
          ))}
        </div> 
        <form>
          <input
            placeholder="new task"
            value={this.state.todo.task}
            onChange={this.handleChanges}
            name="task"
          />
          </form>
  
        <button onClick={this.addTodo}>Add Todo</button>
      </div>







      
    );
  }
}

export default App;




  
 
  
  