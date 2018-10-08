import React from 'react';
import {TodoConsumer} from './TodoProvider';
import TodoList from '../molecules/TodoList';


const TodoListWrapper = ({match}) => {
    return(
        <TodoConsumer>
					{({todos}) => (
							<TodoList todos={todos} match={match}/>
					)
					}
        </TodoConsumer>
    )
}

export default TodoListWrapper;
