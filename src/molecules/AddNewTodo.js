import React from 'react';

class AddNewTodo extends React.Component {
    constructor(props){
        super(props);
        this.todoValue = React.createRef();
    }
    getNewTodo = () => {
        let data =  this.todoValue.current.value;
        if(data){
            this.props.updateState(data);
            this.props.history.push('/');
        }
    }
    render(){
        return(
            <div className="align-middle">
                <input type="text" ref={this.todoValue} />
                <button className="btn btn-info ml-3" type="submit" onClick={this.getNewTodo}>Add Todo</button>
            </div>
        )
    }
}

export default AddNewTodo;