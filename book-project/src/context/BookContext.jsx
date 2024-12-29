import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from "axios"

export const BookContext = createContext()

function BookProvider({ children }) {
    let [bookData, setBookData] = useState([])
    let [originalBook, setOriginalBook] = useState([]);
    async function getData() {
        let result = await axios.get("http://localhost:4000/books")

        setBookData(result.data)
        setOriginalBook(result.data)

    }
    useEffect(() => {
        getData()
    }, [])
    const values = {
        bookData,
        setBookData,
        originalBook,
        setOriginalBook
    }
    return (
        <BookContext.Provider value={values}>
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider
