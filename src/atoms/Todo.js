import React from 'react';
import {TodoConsumer} from '../organisms/TodoProvider';

const Todo = (props) => {

    return(
    <TodoConsumer>
			{({updateTodoStatus}) => (
					<li className={props.isActive ? 'text-success': 'text-danger'} onClick={()=>{updateTodoStatus(props.id)}}>{props.value}</li>
			)}
    </TodoConsumer>
    )
}

export default Todo;