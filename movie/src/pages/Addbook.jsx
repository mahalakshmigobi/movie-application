import React, { useState } from 'react'
import '../styles/Addbook.css'
import axios from 'axios'
export const Addbook = () => {

  const [book, setbook]=useState({
    title:"",
    author:"",
    price:""
  })
const handlesubmit=(e)=>{
e.preventDefault();
console.log("book added:${book}");
console.log(book);
//api call
// try{
//   console.log(book);
//   axios.post('http://localhost:3200/dashboard/user',book);
// }
// catch(error){
// console.error('error in adding book!-${error}' )
// }

}
const handlechange =(e)=>{
const {name,value}=e.target;
//spread operator
setbook({
  ...book,
  [name]:value,
});
};

  return (
    <form className='form-container' onSubmit={handlesubmit} >
      <section className='form-group'>
        <label>Title</label>
        <input type="text" name="title" value={book.title} required className='form-input' onChange={handlechange}/>
      </section>

      <section className='form-group'>
        <label>Author</label>
        <input type="text" name="author" value={book.author} required className='form-input' onChange={handlechange}/>
      </section>
      <section className='form-group'>
        <label>Price</label>
        <input type="number" name="price" value={book.price}  required className='form-input'onChange={handlechange}/>
      </section>

    <button type='submit' className='form-button'>Add book</button>
    </form>
   
  )
}
export default Addbook;
