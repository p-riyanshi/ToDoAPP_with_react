import React,{useState} from "react";
import ToDoList from "./ToDoList";
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const ToDoForm = () => {

    const [toDos,setToDos] =useState([])
    const [toDo, setToDo]= useState('')

    function deleteItem(id){
        setToDos((prevItems)=>{
            return prevItems.filter((item,index)=>{
                return index !==id
            })
        })
    }
    
    function handleChange(e){
        setToDo(e.target.value)
    }
    
    function saveTodo(value){
        if (value.length===0){
            alert("please enter a valid task")
        }else{
            setToDos((prev)=>{
                return [...prev, value]
            })
        }   
    }

    function reset(){
        setToDo('')
    }
    return(
        <div className="main">
            <div className="container">
            <div className="header">
            <h1>ToDo List</h1>
            
            <form className="form-content">
                <input type="text" placeholder="Add ToDo item" 
                name="item" value={toDo} onChange={handleChange}
                    autoComplete="off"
                />
                <button onClick={(event)=>{event.preventDefault(); saveTodo(toDo); reset() }} >
                <AddRoundedIcon />
                </button>
                
            </form>
            </div>
            <div className="todo-list">
                {toDos.map((element, index)=>
                     <ToDoList value={element} key={index} id={index}
                     deleteItem={deleteItem}
              />
                )}
                </div> 
                </div>
        </div>
    )
}

export default ToDoForm;