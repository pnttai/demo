import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';


function App() {

  const [datas, setDatas] = useState([]);
  const [records,setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect (()=>{
  axios.get('https://dev.crush.asia/coffee-core/guest/category/getListProductGroupingByCategory?tenantId=1&fbclid=IwAR1dW_fAjCGPNFZcdmvvwYbf2RMBo8AVHQeEaQijJ0XhSnzeBdAAREGEz-k')
   .then(res=>{
    setDatas(Object.keys(res.data[5]))
    setRecords(res.data)
   })
   .catch(err=>{
    console.log(err)})
  },[])
    

  return (
    <div className="App">
      <div ><Link to="/create" className='btn-primary'>Add</Link></div>
          <form >
            <table> 
              <thead>
                <tr>
                {datas.map((c,i)=>(
                    <th key={i}>{c}</th>
                ))}
                <th>quantity</th>
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {
                records.map((d,i)=>(
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.price}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{d.quantity}</td>
                    <td>
                      <Link to={`/update/${d.id}`} className='edit' >Edit</Link>
                      <button onClick={e=>handleSubmit(d.id)} className='delete' type='button'  >Delete</button>
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
  function handleSubmit(id){
    const conf= window.confirm("do you want to delete");
    if(conf){
    axios.delete('https://dev.crush.asia/coffee-core/guest/category/getListProductGroupingByCategory?tenantId=1&fbclid=IwAR1dW_fAjCGPNFZcdmvvwYbf2RMBo8AVHQeEaQijJ0XhSnzeBdAAREGEz-k/'+id)
    .then(res=>{
      alert('record has delete')
      navigate('/');
    })
    .catch(err=>console.log(err))
  }
  }
   }
export default App;
