import rootReducer from "./reducers/globalReducer";  //in which includes all reducers
import { legacy_createStore as createStore } from 'redux';

//store is a object that holds the complete state of app
//create global store from where we can access all data
//createStore is a function that creates a redux store
const store = createStore(rootReducer)  //rootReducer includes all reducers which creaeted at globalReducers file

export default store;