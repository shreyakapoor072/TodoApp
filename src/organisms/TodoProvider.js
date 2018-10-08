import React from 'react';

const TodoContext = React.createContext();
const TodoConsumer = TodoContext.Consumer;

class TodoProvider extends React.Component{
    state = {
        todos:[]
    }

    //when trying to include addTodo in state getting an error that addTodo is not a function hence removed it from state
    addTodo = (data) => {
        var todoObj = {},updatedTodos = this.state.todos;
        todoObj.id= this.state.todos.length;
        todoObj.value = data;
        todoObj.isActive = true;
    
        updatedTodos.push(todoObj);
    
        this.setState({
          todos: updatedTodos
        })
    }

    changeTodoStatus = (id) => {
        var updatedTodos = this.state.todos.map((item)=> {
          if(item.id == id) {
            item.isActive = !item.isActive
            return item;
          }
          else
            return item; 
        })
        
        this.setState({
          todos: updatedTodos
        })
    }

    render(){
        return(
            <TodoContext.Provider
            value={{
                todos: this.state.todos,
                addTodo: this.addTodo,
                updateTodoStatus: this.changeTodoStatus
              }}
            >
            {this.props.children}
            </TodoContext.Provider>
        )
    }

}

export {TodoProvider , TodoConsumer};