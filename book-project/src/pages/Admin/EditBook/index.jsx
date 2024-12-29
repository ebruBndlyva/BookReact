import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BookContext } from '../../../context/BookContext';

function EditBook() {
  let { setBookData } = useContext(BookContext)
  let editId = useParams()
  let [editBook, setEditBook] = useState([])
  let navigate = useNavigate()




  useEffect(() => {
    axios.get(`http://localhost:4000/books/${editId.id}`)
      .then((res) => {
        setEditBook(res.data)
        console.log(res.data)
      })
  }, [editId.id])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: editBook.title || "",
      description: editBook.description || "",
      price: editBook.price || "",
      author: editBook.author || "",
      pagesCount: editBook.pagesCount || "",
      publishedYear: editBook.publishedYear || "",
      genre: editBook.genre || "",
      language: editBook.language || "",
      image: editBook.image || ""
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      description: Yup.string()
        .min(20, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      price: Yup.number()
        .positive()
        .integer()
        .min(3, "Too short")
        .max(100, "to long")
        .required('Required'),
      author: Yup.string()
        .min(3, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
      pagesCount: Yup.number()
        .positive()
        .integer()
        .min(3, "Too short")
        .max(1000, "to long")
        .required('Required'),
      publishedYear: Yup.string()
        .required('Required'),
      genre: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
      language: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
      image: Yup.string()
        .url()
        .required('Required'),

    }),
    onSubmit: values => {

      axios.put(`http://localhost:4000/books/${editId.id}`, values)
      .then((res) => {
        setBookData(prevBooks => 
          prevBooks.map(book => 
            book.id === editId.id ? res.data : book
          )
        );
        navigate("/admin/adminbooks");
      });
    },
  });

  return (
    <div style={{ marginTop: "100px", padding: "10px 200px" }}>

      <form className='d-flex flex-column gap-3' onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}

        />
        {formik.touched.title && formik.errors.title && (
          <div className='error'>{formik.errors.title}</div>

        )}
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description && (
          <div className='error'>{formik.errors.description}</div>

        )}
        <label htmlFor="price ">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price && (
          <div className='error'>{formik.errors.price}</div>

        )}
        <label htmlFor="author ">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        {formik.touched.author && formik.errors.author && (
          <div className='error'>{formik.errors.author}</div>

        )}
        <label htmlFor="pagesCount ">Page Count</label>
        <input
          id="pagesCount"
          name="pagesCount"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.pagesCount}
        />
        {formik.touched.pagesCount && formik.errors.pagesCount && (
          <div className='error'>{formik.errors.pagesCount}</div>

        )}
        <label htmlFor="publishedYear ">Published Year</label>
        <input
          id="publishedYear"
          name="publishedYear"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.publishedYear}
        />
        {formik.touched.publishedYear && formik.errors.publishedYear && (
          <div className='error'>{formik.errors.publishedYear}</div>

        )}
        <label htmlFor="genre ">Genre</label>
        <input
          id="genre"
          name="genre"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.genre}
        />
        {formik.touched.genre && formik.errors.genre && (
          <div className='error'>{formik.errors.genre}</div>

        )}
        <label htmlFor="language ">Language</label>
        <input
          id="language"
          name="language"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.language}
        />
        {formik.touched.language && formik.errors.language && (
          <div className='error'>{formik.errors.language}</div>

        )}
        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image && (
          <div className='error'>{formik.errors.image}</div>

        )}
        <button className='btn btn-success' type="submit">Update</button>
      </form>
    </div>
  )
}

export default EditBook