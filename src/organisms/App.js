import React, { Component } from 'react';
import {Route , Redirect , Switch} from 'react-router-dom';
import NavigationBar from '../molecules/NavigationBar';
import TodoList from '../molecules/TodoList';
import AddNewTodo from '../molecules/AddNewTodo';

class App extends Component {
  state = {
    todos: []
  }
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

  render() {
    return (
      <div className="container-fluid">
        <NavigationBar />
        <Switch>
          <Route path ="/" exact render={(props)=><TodoList {...props} todos={this.state.todos} toggleTodo ={this.changeTodoStatus} />} />
          <Route path ="/new" render={(props)=><AddNewTodo {...props} updateState={this.addTodo}/>} />
          <Route path ="/pending" render={(props)=><TodoList {...props} todos={this.state.todos} toggleTodo ={this.changeTodoStatus} />} />
          <Route path ="/completed" render={(props)=><TodoList {...props} todos={this.state.todos} toggleTodo ={this.changeTodoStatus} />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
