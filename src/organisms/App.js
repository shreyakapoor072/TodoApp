import React, { Component } from 'react';
import {Route , Redirect , Switch} from 'react-router-dom';
import NavigationBar from '../molecules/NavigationBar';
import {TodoProvider} from './TodoProvider';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>

const AddNewTodo = Loadable({
  loader: () => import('../molecules/AddNewTodo'),
  loading: Loading,
});

const TodoListWrapper = Loadable({
  loader: () => import('../organisms/TodoListWrapper'),
  loading: Loading,
});

class App extends Component {
  
  render() {
    return (
      <div className="container-fluid">
        <NavigationBar />
        <TodoProvider>
          <Switch>
            <Route path ="/" exact component={TodoListWrapper} />
            <Route path ="/new" component={AddNewTodo} />
            <Route path ="/pending" component={TodoListWrapper} />
            <Route path ="/completed" component={TodoListWrapper} />} />
            <Redirect to="/" />
          </Switch>
        </TodoProvider>
      </div>
    );
  }
}

export default App;
