//here call all reducers 

import TodoReducer from "./TodoReducer";    //first reducer
import { combineReducers } from "redux"  //call multiples reducers at a file we need combineReducers

//rootReducer is a main reducer in which store  all reducers of complete app
const rootReducer = combineReducers({

    // combineReducers is a object so also store value as a key value pair
    // but if key and value is same so you can write also only one

    //here give all reducers
    TodoReducer,   //first reducer  
    // mulchangeNumber //second reducer
})
export default rootReducer;