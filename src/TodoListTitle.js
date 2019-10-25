import React from 'react';
import './App.css';


class TodoListTitle extends React.Component {
    state = {
        editMode: false,
        title: this.props.title
    }
    changeTitle = () => {

        this.setState({editMode: true})
    }
    onTitleChange = (e)=>{

        this.setState({title:e.currentTarget.value})
    }
    onTitleBlur = ()=>{
        this.setState({editMode:false})
        this.props.updateTodolistTitle(this.state.title)
    }

    render = () => {
        return (
            <div>
                {
                    this.state.editMode
                        ? <input value ={this.state.title} onChange={this.onTitleChange} onBlur={this.onTitleBlur}/>
                        : <div>
                            <h3 className="todoList-header__title" onClick={this.changeTitle} >{this.state.title}  </h3>
                            <button onClick={this.props.onDelete}>X</button>
                        </div>

                }
            </div>
        );
    }
}

export default TodoListTitle;

