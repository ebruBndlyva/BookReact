import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from "axios"

export const BookContext = createContext()

function BookProvider({children}) {
    let [bookData, setBookData] = useState([])
    function getData() {
        axios.get("http://localhost:4000/books")
            .then(res => {
                setBookData(res.data)
            })

    }
    useEffect(() => {
        getData()
    }, [])
    const values = {
        bookData,
        setBookData
    }
    return (
        <BookContext.Provider value={values}>
{children}
        </BookContext.Provider>
    )
}

export default BookProvider
