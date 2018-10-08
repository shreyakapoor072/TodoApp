import React from 'react';
import Todo from '../atoms/Todo';

const TodoList = (props) => {
    let list,pathValue = props.match.path,filteredList;
    if(props.todos){
        switch(pathValue){
            case '/':
            list = props.todos.map((item)=><Todo key={item.id} {...item} />)
            break;

            case '/pending':
            filteredList = props.todos.filter((item)=>item.isActive === true);
            list = filteredList.map((item)=><Todo key={item.id} {...item} />)
            break;

            case '/completed':
            filteredList = props.todos.filter((item)=>item.isActive === false);
            list = filteredList.map((item)=><Todo key={item.id} {...item} />)
            break;
        }
    }

    return (
        <ul>{list}</ul>
    )
}

export default TodoList;