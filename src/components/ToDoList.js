import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList = (props) =>{

    const [isDone,setIsDone]=useState(false)

    function handleClick(){
        setIsDone((prev)=>{
            return !prev
        })
    }

    return(
        <div className="list">
                    <div className="item" style={
                    { textDecoration:isDone?"line-through":"none"}} onClick={handleClick}>
                        {props.value}
               
                    </div>
                        <button className="btn"
                    onClick={(e)=>{
                        e.preventDefault();
                        props.deleteItem(props.id)
                    }}><DeleteIcon /></button>
        </div>
    )
}

export default ToDoList;