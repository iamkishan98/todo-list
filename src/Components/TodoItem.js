import React from 'react'

export default function TodoItem(props) {
  return (
    <div className="container my-3">
       <h3>{props.item.title}</h3>
       <p>{props.item.desc}</p>
       <button type="button" class="btn btn-sm  btn-danger" onClick={ () => {props.onDelete(props.item) } }>Danger</button>
    </div>
  )
}
