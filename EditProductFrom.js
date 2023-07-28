import React from "react";
import { useState } from "react";
function EditProductForm({product,datas,setDatas}){
  const [newTitle,setNewTitle] = useState("");
    const [newPrice, setNewPrice] = useState(20000);
    const [newQuantity, setNewQuantity] = useState(1);

  return(
    <tr>
      <td></td>
     <td> <input type='text' onChange={(e)=>setNewTitle(e.target.value)} value={newTitle} name='name'placeholder='name' /></td>
     <td><input type='number' onChange={(e)=>setNewPrice(e.target.value)}  value={newPrice} name='price' placeholder='price'/></td>
     <td> <input type='number' onChange={(e)=>setNewQuantity(e.target.value)} value={newQuantity} name='quantity' placeholder='quantity'/></td>
     <td ><button type='submit'>Update</button></td>
    </tr>
  )
}
  export default EditProductForm;