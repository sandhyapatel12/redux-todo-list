//reducer explain How to  perform work which explain by action

const initialState  =
{
    itemsList : []
}

const TodoReducer = (state  = initialState , action) => {
    switch (action.type) {
        case "ADD_ITEM":

        //destruture data from action.payload which includes all info about add items
        const {id, data} = action.payload;

            return {
                ...state, //also initial state return as it is so used spread(...) operator

                //store updated data into itemsList when user click on + iocn
                itemsList: [
                    ...state.itemsList,  //already added data into itemsList stay as it is
                    //get updated data(new data)
                    {
                        //object also store in key value pair but if key and value both are same then write only one
                        id,     
                        data
                    }
                ]
            }

            case "DELETE_ITEM":

            //user want to delete which task that task id not match with that task delete id  then that task automatically remove from list and rest of task add into newList 
            const newList = state.itemsList.filter((curTask) => curTask.id !== action.id)  //itemsList includes all todo

            return {
                ...state, //also initial state return as it is so used spread(...) operator
                itemsList: newList
            }

            case "REMOVE_ALL_ITEM":
                return {
                    ...state, //also initial state return as it is so used spread(...) operator
                    itemsList: []
                }
            
            
    
        default:
            return state;
    }
}

export default TodoReducer