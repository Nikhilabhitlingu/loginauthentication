



// import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer, useState } from 'react'

function UseReduceComponent() {

    const [input,setinput]=useState()
 
     function ReducerFunction(state,action){
      
        switch(action.type){
            case "INCREMENT_COUNT":
            return {...state,count:state.count+1}
            case "DECREMENT_COUNT":
                return{...state,count:state.count-1}
            case "RESET_COUNT":
            return {...state,count:0}
            case "INCREMENT_COUNT_BY_INPUT":
                return{...state,count:state.count+action.payload}
            default :
            return state

        }



    }

    const InitialValue={
        count:0,
        name:"nikhila"
    }

    const[CurrentValue,dispatch]=useReducer(ReducerFunction,InitialValue) 

const handleincrement=()=>{


    dispatch({

      type:"INCREMENT_COUNT"

    })
}
const handledecrement=()=>{


    dispatch({

      type:"DECREMENT_COUNT"

    })
}
const handlereset=()=>{


    dispatch({

      type:"RESET_COUNT"

    })
}
const handlebutton=()=>{


    dispatch({

      type:"INCREMENT_COUNT_BY_INPUT",
      payload:input

    })

    setinput("")
}

  return (
    <>
    <div>UseReduceComponent</div>
    <button onClick={handleincrement}>Increment</button>
    <h1>{CurrentValue.count}</h1>
    <button onClick={handledecrement}>Decrement</button>
    <button onClick={handlereset}>Reset</button>
    <input type='number' value={input} onChange={(event)=>{setinput(Number(event.target.value))}}/>
    <button onClick={handlebutton}>increment by input value</button>
    </>
  )
}

export default UseReduceComponent