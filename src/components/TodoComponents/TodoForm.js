import React from "react";



class AddTodoForm extends React.Component {

    constructor(props){
        super(props); // not sure what this does need to look it up. I think it propogates the properties up to the parent?
        this.state = {
            input:""
        };
    }


      // updates local state to handle the controlled input form

    onUpdate = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

  // this.state.input as the argument, so a new item can be created in App's state

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState ({ input: "" });
    };

    render() {

        return (
            <form OnSubmit ={this.handleSubmit}>
                <input
                    type="text"
                    name="input"
                    id="new-task" //this is new-item in the thingy
                    value={this.state.input}
                    onChange={this.onUpdate}

                />
                <button type="submit"> Add Task </button>
            </form>


        )

    }




}





export default  AddTodoForm