// import { useState } from "react"
// import { useReducer } from "react";

// function renderfunction(state, action) {
//  switch (action.type) {
//     case "ADD_DATA":
//       return [...state, action.payload] ;
//     case "DELETE_DATA":
//       return state.filter((todo) => todo!== action.payload);
//     case "EDIT_DATA":
//       return state.map(todo => todo === action.payload ? action.newData : todo)
//     default:
//       return state;
//  }
// }

// const ToDo = () => {
//  const [inputdata, setInput] = useState("");
//  const [state, dispatch] = useReducer(renderfunction, []);
//  const[edit,setEdit]=useState("")


//  const HandleInput = (event) => {
//     setInput(event.target.value);
    
//  }

//  const Handleadd = () => {
//     if (inputdata !== "") {
//       dispatch({
//         type: "ADD_DATA",
//         payload: inputdata
//       });
//       setInput(""); 
//     }
//  }
//  const Handledelete=(todo)=>{
//      dispatch({
//       type:"DELETE_DATA",
//       payload:todo

//      })
//  }
//  const HandleEdit=(todo)=>{
//  dispatch({
//     type:"EDIT_DATA",
//     payload: todo,
//     newData: edit
//  })
//  setEdit("")

//  }

//  return (
//     <>
//     <center>
//       <h3>TO-DO List</h3>
//       <input type="text" value={inputdata} onChange={HandleInput} />
//       <button onClick={Handleadd}>Add</button>
      

//         {state.map((todo) => (
//           <li >{todo}
//              <button onClick={()=>{HandleEdit(todo)}}>Edit</button>
//                 <button onClick={() => Handledelete(todo)}>Delete</button>
               
//           </li>
//         ))}
      

//       </center>
//     </>
//  )
// }

// export default ToDo;


import React, { useReducer } from "react";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TASK":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "EDIT_TASK":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        ),
      };
    default:
      return state;
  }
};

const ToDo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleEditTask = (id, text) => {
    const updatedTask = {
      id: id,
      text: text,
    };
    dispatch({ type: "EDIT_TASK", payload: updatedTask });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.task.value;
          handleAddTask(text);
          e.target.task.value = "";
        }}
      >
        <input type="text" name="task" placeholder="Enter task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
            <button onClick={() => handleEditTask(todo.id, prompt("Enter new task:"))}>
              Edit
            </button>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default ToDo