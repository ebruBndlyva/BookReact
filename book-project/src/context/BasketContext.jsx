
import React, { createContext, useEffect, useState } from 'react';
export const BasketContext = createContext()
function BasketProvider({ children }) {
    let localeBasket = localStorage.getItem("baskets")

    let [basket, setBasket] = useState(localeBasket ? JSON.parse(localeBasket) : [])
    let values = {
        basket,
        setBasket
    }
    useEffect(() => {
     
            localStorage.setItem("baskets", JSON.stringify(basket))
       
    },[basket])

    return (
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider
