import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {ADD_TODOLIST, addTodolistAC, setTodolistAC} from "./reducer";
import {api} from "./api";

class App extends React.Component {


    addTodoList = (title) => {
        api.createTodolist(title)
            .then(res => {
                let todolist = res.data.data.item
                this.props.addTodolist(todolist)
            })
    }

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("todolists-state", stateAsString);
    }

    // restoreState = () => {
    //     let state = this.state;
    //     let stateAsString = localStorage.getItem("todolists-state");
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     this.setState(state, () => {
    //         this.state.todolists.forEach(t => {
    //             if (t.id >= this.nextTodoListId) {
    //                 this.nextTodoListId = t.id + 1;
    //             }
    //         })
    //     });
    // }
    restoreState = () => {
        api.getTodolist()
            .then(res => {
                this.props.setTodolists(res.data)
            });
    }


    render = () => {
        const todolists = this.props
            .todolists
            .map(tl => <TodoList id={tl.id} title={tl.title} tasks={tl.tasks}/>)

        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTodolists: (todolists) => {
            const action = setTodolistAC(todolists);
            dispatch(action)
        },
        addTodolist: (newTodolist) => {
            const action = addTodolistAC(newTodolist);
            dispatch(action)
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;

