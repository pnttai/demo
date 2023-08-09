import React from "react";
function EditProductForm({product,data,setData,setUpdateState,updateState}){
  function handleValue(e){
    const name = e.target.name;
    const nameValue = e.target.value;
    const price = e.target.price;
    const priceValue = e.target.value;
    const quantity = e.target.quantity;
    const quantityValue = e.target.value;
    const update = data.map((d)=>d.id===product.id?{...d,[name]:nameValue,[price]:priceValue,[quantity]:quantityValue}:d);
    setData(update);
  };
  function handleUpdate (e){  
    e.preventDefault()
    const name = e.target.elements.name.value;
    const price = e.target.elements.price.value;
    const quantity = e.target.elements.quantity.value;
    const update= data.map(d=>d.id===updateState ? {...d,name:name,price:price,quantity:quantity}:d)
   
    if(name ==='' || price==='' ||quantity===''){
      alert('nhập đẩy đủ thông tin cần sửa');
     }
     else{
    setUpdateState(-1)
    setData(update);  }
  }
  return(
    <tr >
      <td value={product.id}></td>
     <td> <input type='text' onChange={handleValue} value={product.name} name='name'placeholder='name' /></td>
     <td><input type='number' onChange={handleValue} value={product.price} name='price' placeholder='price'/></td>
     <td> <input type='number'  onChange={handleValue}  value={product.quantity} name='quantity' placeholder='quantity'/></td>
     <td ><button type='submit' onSubmit={handleUpdate}>Update</button></td>
    </tr>
  )
}
  export default EditProductForm;