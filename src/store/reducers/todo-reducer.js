import * as Actiontypes from '../../actions';

const initialState={
    tasks:[],
}

const todoReducer = ( state = initialState, action ) =>{
    //debugger;
    switch(action.type){
        case Actiontypes.ADD_TODO:
        //debugger;
        return{
            ...state,
            tasks:state.tasks.concat({
                value:action.value,
                status:'active',
            }),
        }
        
        case Actiontypes.TOGGLE_TODO:
        //debugger;
        if(state.tasks.length > 0){
            let completedTaskObjCopy = {
                ...state.tasks[action.index_val],
            }
            if(completedTaskObjCopy.status === 'completed'){
                completedTaskObjCopy.status='active';
            }else{
                completedTaskObjCopy.status='completed';
            }
            
            return{
                ...state,
                tasks:state.tasks.slice(0,action.index_val).concat(completedTaskObjCopy).concat(state.tasks.slice(action.index_val+1)),
            }
        }else{
            return state;
        }
        default:
        return state;
    }
}

export default todoReducer;