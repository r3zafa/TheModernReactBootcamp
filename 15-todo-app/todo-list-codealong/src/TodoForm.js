import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './TodoForm.css';

export class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state={ todo:""};
        this.handleSubmit = this.handelSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handelSubmit(e){
        e.preventDefault();
        const newTodo = { ...this.state, id:uuid(), done:false };
        this.props.createTodo(newTodo);
        this.setState({ todo: "" });
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form className='todoForm' onSubmit={this.handleSubmit}>
                <div className='todoForm-div1'>
                    <label htmlFor="todo">New Todo </label>
                    <input 
                        type="text" 
                        name="todo" 
                        id="todo"
                        value={this.state.todo}
                        placeholder='Type Something ...'
                        onChange={this.handleChange}
                    />
                </div>
                <div className='todoForm-div2'>
                    <button className='todoList-btn'>Add</button>
                </div>
            </form>
        )
    }
}
