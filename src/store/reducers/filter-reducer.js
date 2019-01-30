import * as Actiontypes from '../../actions';

const initalState={
    appliedFilter : 'all',
}
const filterReducer = ( state = initalState , action ) =>{
    //debugger;
    switch(action.type){
        case Actiontypes.FILTER_ALL:
        return {
            appliedFilter:'all',
        }
        case Actiontypes.FILTER_ACTIVE :
        return {
            appliedFilter:'active',
        }
        case Actiontypes.FILTER_COMP :
        return {
            appliedFilter:'completed',
        }
        default:
        return state;
    }
}

export default filterReducer;

