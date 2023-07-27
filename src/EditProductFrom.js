import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
    function EditProductForm(){
      const {id} = useParams();
      const [data,setData ] = useState([]);
      const navigate =useNavigate();
      useEffect(()=>{
        axios.get('https://dev.crush.asia/coffee-core/guest/category/getListProductGroupingByCategory?tenantId=1&fbclid=IwAR0crUmZPW46nxp_-k9yy2gm4i-4Gg3LioiVwMjMpQx5qxZvTF-w6FB-Q-4'+id)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
      })
      function handleSubmit(e){
        e.preventDefault();
        axios.put('https://dev.crush.asia/coffee-core/guest/category/getListProductGroupingByCategory?tenantId=1&fbclid=IwAR0crUmZPW46nxp_-k9yy2gm4i-4Gg3LioiVwMjMpQx5qxZvTF-w6FB-Q-4')
        .then(res=>{
          alert("data update successfully");
          navigate("/")
        })
      }
    return(
      <div className="todo-wrapper">
            <div className="todo-input">
              <form onSubmit={handleSubmit} >
              <div>
                <label >Name</label>
                <input type="text" name="name" className="todo-input-item"
                value={data.name}
                onChange={e=>setData({...data,name:e.target.value})}/>
              </div>
              <div>
              <label >price</label>
                <input type="number" name="price" className="todo-input-item"
                value={data.price} 
                onChange={e=>setData({...data,price:e.target.value})}/>
              </div>
              <div>
              <label >quantity</label>
                <input type="number" name="quantity" className="todo-input-item"
                 value={data.quantity}
                 onChange={e=>setData({...data,quantity:e.target.value})}/>
              </div><br/>
              <button className="btn-info">update</button>
              </form>
            </div>
      </div>
    )
  }
  export default EditProductForm;