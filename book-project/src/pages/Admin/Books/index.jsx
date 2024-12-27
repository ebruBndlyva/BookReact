import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from "axios"
import { EditOutlined ,InfoCircleOutlined,DeleteOutlined } from '@ant-design/icons';

function Books() {
  let [bookData,setBookData]=useState([])
  function getData(){
    axios.get("http://localhost:4000/books")
    .then(res=>{
      setBookData(res.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div style={{height:"100vh",padding:"50px",marginTop:"100px",fontSize:"15px",marginBottom:"100px"}}>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Author</th>
          <th>PagesCount</th>
          <th>PublishedYear</th>
          <th>Genre</th>
          <th>Language</th>
          <th>Edit</th>
          <th>Detail</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          bookData.map(({id, title, description, price, author, pagesCount, publishedYear, genre, language, image})=>(
            <tr key={id}>
            <td><img style={{width:'100px',height:"100px"}} src={image} alt="book" /></td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{author}</td>
            <td>{pagesCount}</td>
            <td>{publishedYear}</td>
            <td>{genre}</td>
            <td>{language}</td>
            <td ><EditOutlined className='btn btn-warning' /></td>
            <td><InfoCircleOutlined className='btn btn-primary' /></td>
            <td><DeleteOutlined className='btn btn-danger'/></td>
          </tr>
          ))
        }
  
      </tbody>
    </Table>
    </div>
  )
}
 
export default Books