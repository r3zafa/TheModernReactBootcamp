import React, { Component } from 'react';
import './NewBoxForm.css';
import { v4 as uuid } from 'uuid';

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {height: "", width: "", color:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }


    handleSubmit(evt){
        evt.preventDefault();
        const newBox = {...this.state, id:uuid()};
        console.log(newBox);
        this.props.createBox(newBox);
        this.setState({height:"", width:"", color:""});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="NewBoxForm">
               
               <div className="NewBoxForm-div">
               <label htmlFor='height'>Height </label>
                <input 
                    type='text'
                    id="height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />
               </div>

               <div className="NewBoxForm-div">
                <label htmlFor='width'>Width </label>
                <input 
                    type='text'
                    id="width"
                    name="width"
                    value={this.state.width}
                    onChange={this.handleChange}
                />
               </div>

                <div className="NewBoxForm-div">
                <label htmlFor='color'>Color </label>
                <input 
                    type="color"
                    id="color"
                    name="color"
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                </div>

                <div className="NewBoxForm-div">
                    <button>Add new Box!</button>
                </div>

            </form>

        )
    }
}

export default NewBoxForm;