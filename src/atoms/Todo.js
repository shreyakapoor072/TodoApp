import React from 'react';

const Todo = (props) => {
    console.log(props);
    return(
        <li className={props.isActive ? 'text-success': 'text-danger'} onClick={()=>{props.toggleTodo(props.id)}}>{props.value}</li>
    )
}

export default Todo;