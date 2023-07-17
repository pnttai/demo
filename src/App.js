import React, { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import {nanoid} from 'nanoid';

function App() {
  const data =[
    {
      id :1,
      name:"hp",
      price:'2222',
      quantity:2
    },
    {
      id :2,
      name:"iphone",
      price:'2444',
      quantity:1
    },
  ]
  const [datas, setDatas] = useState(data);
  const [updateState,setUpdateState] = useState(-1);
  return (
    <div className="App">
      <div>
      <Add setDatas={setDatas}/>
       
          <form onSubmit={handleUpdate}>
            <table> 
              <tr>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>tong tien</th>
                <th>Action</th>
              </tr>
              {
                datas.map((product)=>(
                  updateState === product.id? <Edit product={product} datas={datas} setDatas={setDatas}/>:
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{ product.price*product.quantity}</td>
                    <td>
                      <button className='edit' type='button' onClick={()=>hanleEdit(product.id)} >Edit</button>
                      <button className='delete' type='button'  onClick={()=>hanleDelete(product.id)}>Delete</button>
                    </td>
                  </tr>
                )
              )
              }
            </table>
          </form>
          {
            datas.map((product)=>{

            })
          }
        </div>
    </div>
  )
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
  function hanleDelete(id){
      const updateState = datas.filter((d)=>id!==d.id)
      setDatas(updateState)
  }
}
function Edit({product,datas,setDatas}){
  function handleName(e){
    const name = e.target.value;
    const update = datas.find((d)=>d.id===product.id?{...d,name:name}:d);
    setDatas(update);
  };
  function handlePrice(e){
    const price = e.target.value;
    const update = datas.find((d)=>d.id===product.id?{...d,price:price}:d);
    setDatas(update);
  };
  function handlQuantity(e){
    const quantity = e.target.value;
    const update = datas.find((d)=>d.id===product.id?{...d,quantity:quantity}:d);
    setDatas(update);
  };
  
  return(
    <tr>
     <td> <input type='text' onChange={handleName} value={product.name} name='name'placeholder='name' /></td>
     <td><input type='number' onChange={handlePrice} value={product.price} name='price' placeholder='price'/></td>
     <td> <input type='number' onChange={handlQuantity} value={product.quantity} name='quantity' placeholder='quantity'/></td>
     <td ><button type='submit'>Update</button></td>
    </tr>
  )
}
function Add({setDatas}){
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  function handleValues(e){
    e.preventDefault();
    const name = e.target.elements.name.value;
    const price = e.target.elements.price.value;
    const quantity = e.target.elements.quantity.value;
    const newMember ={
      id: nanoid(),
      name,
      price,
      quantity,
    }
    if(newMember.name ==='' || newMember.price ==='' ||newMember.quantity===''){
      alert('nhap lai'); }
     else{
    setDatas(prevDatas=>prevDatas.concat(newMember));}
    nameRef.current.value="";
    priceRef.current.value="";
    quantityRef.current.value="";

  }
  return(
    <form className='addFrom' onSubmit={handleValues}>
      <input type='text' name='name'placeholder='name' ref={nameRef}/>
      <input type='number' name='price' placeholder='price'ref={priceRef}/>
      <input type='number' name='quantity' placeholder='quantity'ref={quantityRef}/>
      <button >Add</button> 
    </form>
  )
}
export default App;
