import React, { Component } from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import './TodoList.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";


export class TodoList extends Component {

    constructor(props){
        super(props);
        this.state={Todos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.done = this.done.bind(this);
        this.update = this.update.bind(this);
    }

    remove(id){
        this.setState({Todos: [...this.state.Todos.filter(todo => todo.id !== id)]});
    }

    create(newTodo){
        this.setState({Todos: [...this.state.Todos, newTodo]});
    }

    done(id){
        const updateTodos = this.state.Todos.map(todo => {
            if(todo.id === id){ 
                return {...todo,done:!todo.done};
            }
            return todo; 
        });
        this.setState({Todos: updateTodos});
    }

    update(id, updatedTask){
        const updatedTodos = this.state.Todos.map(todo =>{
            if(todo.id === id) {
                return {...todo, todo:updatedTask};
            }
            return todo;
        });
        this.setState({
            Todos: updatedTodos
        })
    }

    render(){
        const TodosList = this.state.Todos.map(todo => {
            return (
                <CSSTransition
                    key={todo.id} timeout={500} className="todoList-transition">
                    
                    <Todo 
                        key={todo.id} 
                        // values
                        id ={todo.id} 
                        todo={todo.todo} 
                        taskDone={todo.done}
                        // functions
                        todoRemove={this.remove} 
                        jobDone={this.done} 
                        updateTodo={this.update}
                    />

                </CSSTransition>
            );

        });

        return(
            <div className='todoList'>
                <h1>Todos</h1>
                <TodoForm createTodo={this.create}/>
                    <TransitionGroup className='todo-list'>
                        {TodosList}
                    </TransitionGroup>
            </div>
        )
    }
    
}