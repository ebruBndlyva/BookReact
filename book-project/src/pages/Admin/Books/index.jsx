import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { EditOutlined, InfoCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { BookContext } from '../../../context/BookContext';
import { Link } from "react-router-dom"
import axios from 'axios';

function Books() {
  let { bookData, setBookData } = useContext(BookContext)
  function handleDelete(id) {
    axios.delete(`http://localhost:4000/books/${id}`)
      .then(() => { alert("Deleted") })
    let delFiltered = bookData.filter(book => book.id != id)
    setBookData(delFiltered)
  }


  return (
    <div style={{ height: "100vh", padding: "50px", marginTop: "100px", fontSize: "15px", marginBottom: "100px" }}>
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
            bookData.map(({ id, title, description, price, author, pagesCount, publishedYear, genre, language, image }) => (
              <tr key={id}>
                <td><img style={{ width: '100px', height: "100px" }} src={image} alt="book" /></td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{author}</td>
                <td>{pagesCount}</td>
                <td>{publishedYear}</td>
                <td>{genre}</td>
                <td>{language}</td>
                <td ><Link to={`/admin/editbook/${id}`} className='btn btn-warning' ><EditOutlined /></Link></td>
                <td><Link to={`/admin/adminbooks/${id}`}><InfoCircleOutlined className='btn btn-primary' /></Link></td>
                <td><DeleteOutlined className='btn btn-danger' onClick={() => handleDelete(id)} /></td>
              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
  )
}

export default Books