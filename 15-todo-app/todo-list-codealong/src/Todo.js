import React, { Component } from 'react';
import './Todo.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";

export class Todo extends Component {

    constructor(props){
        super(props);
        this.state={
            isEditing:false,
            todo:this.props.todo
        }
        this.handelRemove = this.handelRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handelTaskDone = this.handelTaskDone.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    
    }

    handelRemove(){
        this.props.todoRemove(this.props.id)
    }

    toggleForm(){
        this.setState({isEditing: !this.state.isEditing});
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id,this.state.todo);
        this.setState({isEditing:false});
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handelTaskDone(){
        this.props.jobDone(this.props.id)
    }
 

    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <CSSTransition key='editing' timeout={500} classNames='form'>
                <form className='todo-edit-form' onSubmit={this.handleUpdate}>
                  <input
                    type='text'
                    value={this.state.todo}
                    name='todo'
                    onChange={this.handleChange}
                  />
                  <button>Save</button>
                </form>
              </CSSTransition>
            );
        } else {
            result = (
            <CSSTransition key='normal' timeout={500} >
                <div onClick={this.handelTaskDone} className='todo-task'>
                        {this.props.todo}
                </div>
            </CSSTransition>
            );
         }
        return(
            <TransitionGroup className={this.props.taskDone? 'taskDone':'notDone'}>
                <div className='todo-item'>
                    {result}
                    <div className='todo-btns'>
                    <button onClick={this.toggleForm} className='todo-btnEdit'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100">
                                <path d="M16.5,94.083c-1.734,0-3.365-0.675-4.593-1.9c-1.61-1.608-2.266-3.977-1.712-6.182l3.56-14.178 c0.294-1.171,0.905-2.232,1.77-3.074l56.008-56.143c1.732-1.735,4.035-2.69,6.485-2.69c2.455,0.001,4.757,0.958,6.487,2.694 l7.096,7.124c3.277,3.588,3.186,9.188-0.274,12.661L35.249,88.603c-0.462,0.463-0.985,0.849-1.557,1.152 c-0.429,0.232-0.93,0.428-1.448,0.56l-14.154,3.572C17.56,94.019,17.029,94.083,16.5,94.083z" opacity=".35"></path>
                                <path fill="#f2f2f2" d="M14.5,92.083c-1.734,0-3.365-0.675-4.593-1.9c-1.61-1.608-2.266-3.977-1.712-6.182l3.56-14.178 c0.294-1.171,0.905-2.232,1.77-3.074l56.008-56.143c1.732-1.735,4.035-2.69,6.485-2.69c2.455,0.001,4.757,0.958,6.487,2.694 l7.096,7.124c3.277,3.588,3.186,9.188-0.274,12.661L33.249,86.603c-0.462,0.463-0.985,0.849-1.557,1.152 c-0.429,0.232-0.93,0.428-1.448,0.56l-14.154,3.572C15.56,92.019,15.029,92.083,14.5,92.083z"></path>
                                <path fill="#f9b84f" d="M76.516,34.03L28.945,81.714L18.361,71.105l47.571-47.684L76.516,34.03z"></path>
                                <path fill="#f4665c" d="M84.721,22.033l-6.822-6.836c-1.037-1.041-2.726-1.041-3.765,0l-4.961,4.972l10.583,10.608 l4.965-4.968C85.76,24.766,85.76,23.078,84.721,22.033"></path>
                                <path fill="#9aa2e6" d="M65.625,23.721l3.538-3.554l10.59,10.608l-3.538,3.554L65.625,23.721z"></path>
                                <path fill="#fedeb3" d="M15.074,85.583l14.146-3.57L18.634,71.406L15.074,85.583z"></path>
                                <path fill="#40396e" d="M14.5,87.083c-0.393,0-0.775-0.154-1.06-0.438c-0.374-0.373-0.523-0.915-0.395-1.427l3.56-14.177 c0.071-0.282,0.221-0.532,0.426-0.726l56.042-56.177c0.786-0.788,1.832-1.222,2.945-1.222c0,0,0.001,0,0.002,0 c1.113,0,2.158,0.435,2.943,1.223l6.82,6.834c0.001,0,0.001,0.001,0.002,0.002c1.616,1.625,1.616,4.269,0,5.892L29.709,83.071 c-0.106,0.106-0.228,0.196-0.358,0.265c-0.105,0.057-0.219,0.102-0.338,0.132l-14.146,3.57 C14.746,87.068,14.622,87.083,14.5,87.083z M19.414,72.174l-2.848,11.341l11.311-2.854L83.659,24.75 c0.454-0.456,0.454-1.199,0-1.657l-6.82-6.835c-0.219-0.22-0.51-0.34-0.82-0.341h0c-0.311,0-0.602,0.121-0.821,0.341L19.414,72.174 z"></path>
                                <path fill="#40396e" d="M16.303,78.414L14.5,85.583l7.15-1.807L16.303,78.414z"></path>
                            </svg>
                        </button>
                    <button onClick={this.handelRemove} className='todo-btnRemove'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100">
                                <path d="M37.297,94.938c-4.641,0-8.578-3.319-9.363-7.894l-8.278-48.311C16.967,37.937,15,35.443,15,32.5 C15,23.402,22.402,16,31.5,16h2.234c2.005-4.158,6.256-7,11.146-7h14.238c4.891,0,9.142,2.842,11.146,7H72.5 C81.598,16,89,23.402,89,32.5c0,2.707-1.664,5.033-4.022,6.009l-8.316,48.533c-0.781,4.573-4.719,7.896-9.362,7.896H37.297z" opacity=".35"></path>
                                <path fill="#f2f2f2" d="M35.297,92.938c-4.641,0-8.578-3.319-9.363-7.894l-8.278-48.311C14.967,35.937,13,33.443,13,30.5 C13,21.402,20.402,14,29.5,14h2.234c2.005-4.158,6.256-7,11.146-7h14.238c4.891,0,9.142,2.842,11.146,7H70.5 C79.598,14,87,21.402,87,30.5c0,2.707-1.664,5.033-4.022,6.009l-8.316,48.533c-0.781,4.573-4.719,7.896-9.362,7.896H35.297z"></path>
                                <path fill="#40396e" d="M63,25H37c-0.828,0-1.5-0.672-1.5-1.5v-4.119c0-4.069,3.312-7.381,7.381-7.381h14.238 c4.069,0,7.381,3.312,7.381,7.381V23.5C64.5,24.328,63.828,25,63,25z M38.5,22h23v-2.619c0-2.416-1.965-4.381-4.381-4.381H42.881 c-2.416,0-4.381,1.965-4.381,4.381V22z"></path>
                                <polygon fill="#9aa2e6" points="22.806,28.303 32.767,86.438 67.828,86.438 77.79,28.303"></polygon>
                                <path fill="#707cc0" d="M80.5,28.957h-61v0c0-4.671,3.787-8.457,8.457-8.457h44.085C76.713,20.5,80.5,24.287,80.5,28.957 L80.5,28.957z"></path>
                                <path fill="#40396e" d="M65.299,87.938H35.297c-2.198,0-4.063-1.572-4.436-3.739L21.917,32H19.5c-0.828,0-1.5-0.672-1.5-1.5 C18,24.159,23.159,19,29.5,19h41C76.841,19,82,24.159,82,30.5c0,0.828-0.672,1.5-1.5,1.5h-1.822l-8.944,52.197 C69.363,86.364,67.498,87.938,65.299,87.938z M21.133,29h2.049c0.73,0,1.355,0.526,1.479,1.247l9.158,53.444 c0.124,0.722,0.746,1.246,1.479,1.246h30.002c0.732,0,1.354-0.524,1.478-1.246l9.158-53.444C76.058,29.526,76.683,29,77.413,29 h1.454c-0.71-3.974-4.192-7-8.367-7h-41C25.325,22,21.843,25.026,21.133,29z"></path>
                                <path fill="#40396e" d="M38.647,76.944c-0.759,0-1.41-0.574-1.49-1.346l-3.86-37.445c-0.085-0.824,0.515-1.562,1.338-1.646 c0.82-0.08,1.561,0.514,1.646,1.338l3.86,37.445c0.085,0.824-0.515,1.562-1.338,1.646C38.751,76.941,38.699,76.944,38.647,76.944z"></path>
                                <path fill="#40396e" d="M46.414,76.942c-0.805,0-1.47-0.638-1.498-1.448l-1.298-37.406 c-0.028-0.828,0.619-1.522,1.447-1.551c0.83-0.034,1.521,0.619,1.551,1.447l1.298,37.406c0.028,0.828-0.619,1.522-1.447,1.551 C46.449,76.942,46.432,76.942,46.414,76.942z"></path>
                                <path fill="#40396e" d="M54.183,76.941c-0.018,0-0.034,0-0.052-0.001c-0.828-0.028-1.477-0.722-1.448-1.55l1.265-37.368 c0.027-0.828,0.746-1.492,1.55-1.448c0.828,0.028,1.477,0.722,1.448,1.55l-1.265,37.368C55.653,76.303,54.987,76.941,54.183,76.941 z"></path>
                                <path fill="#40396e" d="M61.949,76.939c-0.052,0-0.103-0.003-0.155-0.008c-0.824-0.085-1.424-0.821-1.339-1.646 l3.827-37.328c0.085-0.824,0.818-1.412,1.646-1.339c0.824,0.085,1.424,0.821,1.339,1.646l-3.827,37.328 C63.36,76.364,62.709,76.939,61.949,76.939z"></path>
                            </svg>
                    </button>
                </div>
                </div>
            </TransitionGroup>
        );
    }
}