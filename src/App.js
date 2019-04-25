import React from 'react';
 import Todos from './Todo';

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
          id: '',
          completed: ''
        }

      }

// This callback event handler function, upon the click of the submit button, updates the todo list with the newly submitted item
      handleChanges= event => {
        // console.log(event.target.name);
        this.setState({
        todo: {
          ...this.state.todo, //all of the values on the todo item that might already be there that we don't want to erase
          [event.target.name]: event.target.value //new inputs of the todo list. 
        }
        });
      }
    }

 
 
 
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* <div className='todo-list'>
          <Stj
        </div>
         */}  
        </div>







      </div>
    );
  }
}

export default App;




  
 
  
  