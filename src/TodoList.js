import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTaskAC, changeTodoListTitle, deleteTaskAC, deleteTodolistAC, setTasksAC, updateTaskAC} from "./reducer";
import axios from "axios";
import {api} from "./api";


class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.newTasksTitileRef = React.createRef();

    }

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state-" + this.props.id, stateAsString);
    }

    restoreState = () => {
        api.getTasks(this.props.id)
            .then(res => {
                this.props.setTasks(res.data.items, this.props.id)
            });
    }

    nextTaskId = 0;

    state = {
        tasks: [],
        filterValue: "All"
    };

    addTask = (newText) => {
        api.createTask(newText,this.props.id,)
            .then(res => {
                this.props.addTask(res.data.data.item, this.props.id)
            })
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => {
            this.saveState();
        });
    }

    changeTask = (taskId, obj) => {
        let task = this.props.tasks.find(item => {
            return taskId === item.id
        });
        let newTask = {...task, ...obj};
        api.updateTask(newTask)
            .then(res => {
                this.props.updateTask(taskId, obj, this.props.id);
            })
            .catch(res => {
            })
        //
    }

    changeStatus = (taskId, status) => {
        this.changeTask(taskId, {status});
    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    }

    deleteTodolist = () => {
        api.deleteTodolist(this.props.id)
            .then(res => {
                this.props.deleteTodolist(this.props.id)
            })
    }

    deleteTask = (taskId) => {
        api.deleteTask(taskId)
            .then(res => {
                this.props.deleteTask(taskId, this.props.id)
            })
    }
    updateTodolistTitle =(title)=>{
        api.updateTitleTodolist(this.props.id,title)
            .then(res => {
              this.props.changeTodoListTitle(this.props.id,title)
            })
    }

    render = () => {
        let {tasks = []} = this.props
        return (
            <div className="todoList">
                <div className="todoList-header">
                    <TodoListTitle title={this.props.title} onDelete={this.deleteTodolist} updateTodolistTitle={this.updateTodolistTitle}/>
                    <AddNewItemForm addItem={this.addTask}/>

                </div>

                <TodoListTasks changeStatus={this.changeStatus}
                               changeTitle={this.changeTitle}
                               deleteTask={this.deleteTask}
                               tasks={tasks.filter(t => {
                                   if (this.state.filterValue === "All") {
                                       return true;
                                   }
                                   if (this.state.filterValue === "Active") {
                                       return t.status === 0;
                                   }
                                   if (this.state.filterValue === "Completed") {
                                       return t.status === 2;
                                   }
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask(newTask, todolistId) {

            //const action = addTaskAC(newTask, todolistId);
            dispatch(addTaskAC(newTask, todolistId));
        },
        updateTask(taskId, obj, todolistId) {
            const action = updateTaskAC(taskId, obj, todolistId);
            dispatch(action);
        },
        deleteTodolist: (todolistId) => {
            const action = deleteTodolistAC(todolistId);
            dispatch(action)
        },
        deleteTask: (taskId, todolistId) => {
            const action = deleteTaskAC(todolistId, taskId);
            dispatch(action)
        },
        setTasks(tasks, todolistId) {
            dispatch(setTasksAC(tasks, todolistId))
        },
        changeTodoListTitle(todoListId,title){
            dispatch(changeTodoListTitle(todoListId,title))
        }
    }
}

const ConnectedTodolist = connect(null, mapDispatchToProps)(TodoList);

export default ConnectedTodolist;

