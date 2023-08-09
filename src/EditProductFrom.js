import React from "react";
function EditProductForm({product,datas,setDatas}){
  function handleValue(e){
    const name = e.target.name;
    const nameValue = e.target.value;
    const price = e.target.price;
    const priceValue = e.target.value;
    const quantity = e.target.quantity;
    const quantityValue = e.target.value;
    const update = datas.map((d)=>d.id===product.id?{...d,[name]:nameValue,[price]:priceValue,[quantity]:quantityValue}:d);
    setDatas(update);
  };
  return(
    <tr>
      <td value={product.id}></td>
     <td> <input type='text' onChange={handleValue} value={product.name} name='name'placeholder='name' /></td>
     <td><input type='number' onChange={handleValue} value={product.price} name='price' placeholder='price'/></td>
     <td> <input type='number'  onChange={handleValue}  value={product.quantity} name='quantity' placeholder='quantity'/></td>
     <td ><button type='submit'>Update</button></td>
    </tr>
  )
}
  export default EditProductForm;