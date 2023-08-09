import React, { useState } from "react";
import './App.css';
import {nanoid} from 'nanoid';
function AddProductForm  ({setData}){
  const [newTitle,setNewTitle] = useState("");
    const [newPrice, setNewPrice] = useState(20000);
    const [newQuantity, setNewQuantity] = useState(1);
  function handleSubmit(e){
    e.preventDefault();
    const newMember ={
      id:nanoid(Number),
      name:newTitle,
      price:newPrice,
      quantity:newQuantity
    }
    if(newMember.name ==='' || newMember.price ==='' ||newMember.quantity===''){
      alert('retype'); }
     else{
      setData(prevData=>prevData.concat(newMember));}
      setNewTitle('');
  }
    return(
      <div className="todo-wrapper">
            <div className="todo-input">
              <form onSubmit={handleSubmit}>
              <div>
                <label >Name</label>
                <input type="text" name="name" className="todo-input-item" value={newTitle}
               onChange={(e)=>setNewTitle(e.target.value)}/>
              </div>
              <div>
              <label >price</label>
                <input type="number" name="price" className="todo-input-item" value={newPrice}
                onChange={(e)=>setNewPrice(e.target.value)}/>
              </div>
              <div>
              <label >quantity</label>
                <input type="number" name="quantity" className="todo-input-item" value={newQuantity}
                onChange={(e)=>setNewQuantity(e.target.value)}/>
              </div><br/>
              <button className="btn-info">submit</button>
              </form>
            </div>
      </div>
    )
  }
  export default AddProductForm;