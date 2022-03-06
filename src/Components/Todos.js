import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container my-3'>
            <h3>ToDo List</h3>
            <div className='container'>
            { props.items.length !== 0 ?
                props.items.map( (item) => {
                    return <TodoItem item = {item} key= {item.sno} onDelete = {props.onDelete} />
                })
            : "No items in the list"
            }  
            </div> 
    </div>
  )
}
