import React from 'react';
import {TodoConsumer} from '../organisms/TodoProvider';

class AddNewTodo extends React.Component {
    constructor(props){
        super(props);
        this.todoValue = React.createRef();
    }
   
    render(){
        return(
            <TodoConsumer>
            {value =>(
            <div className="align-middle">
                <input type="text" ref={this.todoValue} />
                <button className="btn btn-info ml-3" type="submit" onClick={()=>{value.addTodo(this.todoValue.current.value); this.props.history.push('/');}}>Add Todo</button>
            </div>)}
            </TodoConsumer>
        )
    }
}

export default AddNewTodo;