import React from 'react'
import { useState } from 'react'

export const Addtodo = (props) => {

    const [Title,setTitle] = useState("")
    const [Desc,setDesc] = useState("")

    const onsubmit = (e)=>{
        e.preventDefault();
        console.log(Title,Desc)
        let index = props.items.length + 1;
        const newtodo = {sno : index, title: Title, desc: Desc};
        console.log(newtodo)
        props.setItems([...props.items, newtodo]);
    }

  return (
    <div className='container my-3'>
        <h3>Add Todo Item</h3>
            <form onSubmit={onsubmit} >
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" name="title" value={Title} class="form-control" id="title" aria-describedby="emailHelp" onChange={ (e) => setTitle(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Description</label>
                <input type="text" name="desc" value={Desc} class="form-control" id="desc" onChange={ (e) => setDesc(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-sm btn-success">Submit</button>
            </form>
    </div>
  )
}
