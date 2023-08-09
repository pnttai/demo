import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductFrom';
function App() {

  const [data, setData] = useState([]);
  const [updateState,setUpdateState] = useState(-1);
  useEffect (()=>{
  axios.get('https://dev.crush.asia/coffee-core/guest/category/getListProductGroupingByCategory?tenantId=1')
  .then((response) => {
    setData(response.data);
  })
    .catch(error => console.log(error))
  },[]);
    const AddProduct=(e) =>{

    }

  return (
    <div className="App">
       <AddProductForm setData={setData}/>
          <form >
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
              <tbody >
              {
                data.map((d,i)=>(
                  updateState === d.id? <EditProductForm  product={d} data={data} setData={setData}/>:
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.price}</td>
                    <td>{d.quantity}</td>
                    <td>
                      <button onClick={()=>handleEdit(d.id)} className='edit' type='button'>Edit</button>
                      <button onClick={()=>handleDelete(d.id)} className='delete' type='button'  >Delete</button>
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
  function handleDelete(id){
    const updateState = data.filter((d)=>id!==d.id)
    setData(updateState)
}
function handleEdit (id){
  setUpdateState(id);
}
   }
export default App;
