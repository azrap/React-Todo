import React from 'react';

// Todo is the grandchild of Todolist which is the child of the entire App

 function Todo(props){

    let classNames = "todo"
    if (props.todo.completed){
      classNames += " completed";
      // need to add strike-through styling for "todo completed"
    }


    function updateCompletedHere(){

          // this calls props.toggleComplete function called from App->TodoList->Todo

      props.toggleComplete(props.todo.id);

    }


    return (

      <div className={classNames} onClick={updateCompletedHere}>

      <props> {props.todo.name} </props>

      </div>


    );



}




export default Todo


//     {
//         task: 'get confused AF',
//         id: 3,
//         completed: false
//       },
  
//       {
//         task: 'take a break',
//         id: 4,
//         completed: false
//       },
  
//       {
//         task: 'rewatch lecture',
//         id: 5,
//         completed: false
//       },
  
//       {
//         task: 'feel a little less confused but still pretty confused',
//         id: 6,
//         completed: false
//       },
  
  
//       {
//         task: 'fork the repo and start the project anyway',
//         id: 7,
//         completed: false
//       },
  
  
//       {
//         task: 'pair program',
//         id: 8,
//         completed: false
//       },
  
//       {
//         task: 'somehow complete the MVP though no idea how some of the code works',
//         id: 9,
//         completed: false
//       },
  
//       {
//         task: 'pat yourself on the back and celebrate with your team at Standup',
//         id: 10,
//         completed: false
  
//       },
  
//       {
//         task: 'take a long break ',
//         id: 11,
//         completed: false
        
//       },
  
//       {
//         task: 'reset the list and do it all over again',
//         id: 12,
//         completed: false
        
//       }
  
//   ];
  


