import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Todos from './Components/Todos'
import {Addtodo} from './Components/Addtodo'
import React,{useState} from 'react'
function App() {
  let appName = "TODO-LIST"
  const [Items,setItems] = useState([
    {
      sno : 1,
      title: "Pull workout",
      desc : "Back biceps",
    },
    {
      sno : 2,
      title: "Push workout",
      desc : "Chest triceps shoulder workout",
    },
    {
      sno : 3,
      title: "Legs workout",
      desc : "Squats, Leg press, Lunges workout",
    }
])

  const onDelete = (item)=>{
    console.log("Item deleted ",item)
    
    setItems( Items.filter( (Item) => {
        return Item.sno !== item.sno
    })
    )

  }


  return (
    <>
    <Header title={appName} searchBar ={false} />
    <Addtodo items={Items} setItems={setItems}/>
    <Todos items={Items} onDelete={onDelete} />
    <Footer />
    </>
  );
}

export default App;
