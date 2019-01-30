import React from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions';

import './Todos.css';

class Todos extends React.Component{
    state={
        inputValue:'',
    }

    updateInputHandler = ( event ) =>{
        this.setState({
            inputValue:event.target.value,
        });
    }

    addTodoHandler1 = (value) =>{
        this.setState({
            inputValue:'',
        });

        this.props.addTodoHandler(value);
    }

    getFilteredList= (currentFilter,todos) =>{

        if(currentFilter !== 'all'){
            return todos.map( (el,index) => {
                return el.status === currentFilter ? (<li key={index} 
                onClick={ () => this.props.completeTaskHandler(index)}
                >{el.value} </li>) : null 
            })
        }else{
            return todos.map( (el,index) => {
                return (<li key={index} 
                onClick={ () => this.props.completeTaskHandler(index)}
                style={ {textDecoration: el.status==='completed' ? 'line-through' : 'none'}}
                >{el.value} </li>)
            })
        } 
    }

    render(){
        
        return(
            <div className="todo-container">
                <div className="add-controls">
                    <input type="text" onChange={this.updateInputHandler} value={this.state.inputValue}/>
                    <button onClick={ () => this.addTodoHandler1(this.state.inputValue)}> AddTodo </button>
                </div>
                <div>
                <span> Show :</span>
                <button onClick={this.props.filterAllHandler} disabled={this.props.filter.appliedFilter === 'all' ? true :false}> ALL </button>
                <button onClick={this.props.filterActiveHandler}
                disabled={this.props.filter.appliedFilter === 'active' ? true :false}> ACTIVE </button>
                <button onClick={this.props.filterCompletedHandler}
                disabled={this.props.filter.appliedFilter === 'completed' ? true :false}> COMPLETED </button>
                </div>
                <div className="list-view">
                    <ul>
                    {this.props.todos.length > 0  ? this.getFilteredList(this.props.filter.appliedFilter,this.props.todos)  : <div/>}
                    </ul>
                </div>

            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        todos:state.todo.tasks,
        filter:state.filter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoHandler : (value) => dispatch({type:ActionTypes.ADD_TODO,value:value}),
        completeTaskHandler : (index_val) => dispatch({type:ActionTypes.TOGGLE_TODO,index_val:index_val}),
        filterAllHandler : () => dispatch({type:ActionTypes.FILTER_ALL}),
        filterActiveHandler : () => dispatch({type:ActionTypes.FILTER_ACTIVE}),
        filterCompletedHandler : () => dispatch({type:ActionTypes.FILTER_COMP}),
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(Todos);