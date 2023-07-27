import React, { useState } from "react";
import './App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddProductForm (){
  const [inputData,setInputData]= useState({
    name:'',
    price: '',
    quantity:''
  })
  const navigat = useNavigate();
  function handleSubmit (e){
    e.preventDefault();
    axios.post('https://dev.crush.asia/coffee-core/guest/category/getListProductGroupingByCategory?tenantId=1&fbclid=IwAR0crUmZPW46nxp_-k9yy2gm4i-4Gg3LioiVwMjMpQx5qxZvTF-w6FB-Q-4',setInputData)
    .then(res=>{
      alert('data added successfully');
      navigat('/');
    })
    .catch(err=> console.log(err));
  }
    return(
      <div className="todo-wrapper">
            <div className="todo-input">
              <form onSubmit={handleSubmit}>
              <div>
                <label >Name</label>
                <input type="text" name="name" className="todo-input-item"
                onChange={e=>setInputData({...inputData,name:e.target.value})}/>
              </div>
              <div>
              <label >price</label>
                <input type="number" name="price" className="todo-input-item"
                 onChange={e=>setInputData({...inputData,price:e.target.value})}/>
              </div>
              <div>
              <label >quantity</label>
                <input type="number" name="quantity" className="todo-input-item"
                 onChange={e=>setInputData({...inputData,quantity:e.target.value})}/>
              </div><br/>
              <button className="btn-info">submit</button>
              </form>
            </div>
      </div>
    )
  }
  export default AddProductForm;