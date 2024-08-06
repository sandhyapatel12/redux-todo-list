import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, removeAllItem } from '../actions';   //in this file explain all actions

const Todo = () => {

  //usestate for find that user what write in input field
  const [inputedData, setinputedData] = useState("")  //already input field is null

  //get data from our global store (redux store) (useSelector hook work like  useContext hook which through we can access context api data)
  //(state -> TodoReducer -> itemsList)  give here new updated itemsList path which is created at TodoReducers in initialstate(in TodoReducer define updated itemsList )
  const todoList = useSelector((state) => state.TodoReducer.itemsList)  //now todoList includes all updated task 

  //dispatch give order to action for do work as per instuctions 
  //dispatch trigger the action
  const dispatch = useDispatch();

  //add task
  const addTask = () => {
    //inputedData includes that data which user write at input fields so pass addItem to inputedData
    dispatch(addItem(inputedData))
    setinputedData('')    //after one time add data inputfieds will be blank
    console.log("added todo");
  };
  
  //for chanage inputed data
  const handleChange = (e) => {
    //set updated input data insetinputedData
    setinputedData(e.target.value)
    // console.log(e.target.value);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <div className="flex items-center border rounded-md overflow-hidden mb-4">
          <input
            type="text"
            className="flex-grow p-2 outline-none"
            placeholder="Add a new task..."
            value={inputedData}
            onChange={handleChange}

          />
          <button
            className="p-2 bg-blue-500 text-white hover:bg-blue-700"
            onClick={addTask}
          >
            +
          </button>
        </div>

        {/* div for task list which return through map method */}
        <div>
          {
            //TodoList includes all updated task so map method through we can return one by one
            todoList.map((curTask) => {
              return (<div key={curTask.id} className='flex items-center px-3  justify-between border-b last:border-0 py-2 '>
                <h1>{curTask.data}</h1>  {/* data incldes name of task */}
                <i
                  className="fa-solid fa-trash text-blue-500"
                  // delete task
                  onClick={() =>
                    dispatch(deleteItem(curTask.id),
                      console.log("delete todo", curTask.id))
                  }></i>
              </div>)
            })
          }
        </div>

        {/* if todo list is blank then not display this button */}
        {todoList.length !== 0 &&
          <div className='flex items-center justify-center mt-5'>
            <button 
            className='bg-blue-500 px-5 py-2 rounded-md text-white hover:bg-blue-700'
            onClick={() => dispatch(removeAllItem())}>Remove All Task</button>
          </div>}

      </div>
    </div>
  );
};

export default Todo;
