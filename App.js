import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductFrom';

function App() {

  const [datas, setDatas] = useState([]);
  const [updateState,setUpdateState] = useState(-1);
  useEffect (()=>{
  axios.get('https://dev.crush.asia/coffee-core/guest/category/getListProductGroupingByCategory?tenantId=1')
  .then((response) => {
    setDatas(response.data);
  })
    .catch(error => console.log(error))
  },[]);
    

  return (
    <div className="App">
       <AddProductForm setDatas={setDatas}/>
          <form  onSubmit={handleUpdate}>
            <table> 
              <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>price</th>
                <th>quantity</th>
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {
                datas.map((d,i)=>(
                  updateState === d.id? <EditProductForm d={d} datas={datas} setDatas={setDatas}/>:
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.price}</td>
                    <td>{d.quantity}</td>
                    <td>
                      <button onClick={()=>hanleEdit(d.id)} className='edit' type='button'>Edit</button>
                      <button onClick={()=>hanleDelete(d.id)} className='delete' type='button'  >Delete</button>
                    </td>
                  </tr>
                )
              )
              }
              </tbody>
            </table>
          </form>
      
        </div>
  )
  function hanleDelete(id){
    const updateState = datas.filter((d)=>id!==d.id)
    setDatas(updateState)
}
function handleUpdate (e){  
  e.preventDefault();
  const name = e.target.elements.name.value;
  const price = e.target.elements.price.value;
  const quantity = e.target.elements.quantity.value;
  const update= datas.map(d=>d.id===updateState ? {...d,name:name,price:price,quantity:quantity}:d)
 
  if(name ==='' || price==='' ||quantity===''){
    alert('nhập đẩy đủ thông tin cần sửa');
   }
   else{
  setUpdateState(-1)
  setDatas(update);  }
}
function hanleEdit (id){
  setUpdateState(id);
}
   }
export default App;
