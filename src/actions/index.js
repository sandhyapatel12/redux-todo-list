//define here all actions
//action is explain  what to do  not say (How to do)
//after actions function call reducer function which explain how to do


export const addItem = (data) => {
    return {
        type: "ADD_ITEM",
        payload: {
            id: Date.now(),  //only for generate unique id
            data: data
        }       //when we want to give multiple infomations to action at that time use payload
    }
}

export const deleteItem = (id) => {
    return {
        type: "DELETE_ITEM",
        id
    }
}

export const removeAllItem = () => {
    return {
        type: "REMOVE_ALL_ITEM"
    }
}