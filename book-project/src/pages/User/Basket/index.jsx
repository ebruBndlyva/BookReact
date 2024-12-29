import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { BasketContext } from '../../../context/BasketContext';
import { MinusSquareFilled, PlusSquareFilled } from '@ant-design/icons';
function Basket() {
  let { basket, setBasket } = useContext(BasketContext)
  let [total, setTotal] = useState(0)

useEffect(()=>{
  let totalPrice = basket.reduce((sum,item)=>sum +(item.price*item.count),0)
  setTotal(totalPrice)
},[basket])


  function DecraseBook(BasketData) {
    if (BasketData.count > 1) {
      BasketData.count--
      setBasket([...basket])
    } else {
      let filtered = basket.filter(elem => elem.id != BasketData.id)
      setBasket(filtered)
    }


  }
  function IncraseBook(BasketData) {
    BasketData.count++
    setBasket([...basket])

  }
  function DeleteBasketData(BasketData) {
    let filtered = basket.filter(elem => elem.id != BasketData.id)
    setBasket(filtered)
  }
  return (

    <div style={{ marginTop: "100px" }}>
 {
  basket.length==0 ? (<h2>Sizin basketiniz bosdur</h2>):(
    <div>
    <Table striped bordered hover size="sm">
         <thead>
           <tr>
             <th>Image</th>
             <th>Title</th>
             <th>Price</th>
             <th>TotalPrice</th>
             <th>Decrase</th>
             <th>Count</th>
             <th>Incrase</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>
           {
             basket.map((BasketData => (
               <tr key={BasketData.id}>
                 <td><img style={{ width: "100px", height: "100px" }} src={BasketData.image} alt="img" /></td>
                 <td>{BasketData.title}</td>
                 <td>{BasketData.price}</td>
                 <td>{(BasketData.price * BasketData.count).toFixed(2)}</td>
                 <td ><button onClick={() => DecraseBook(BasketData)}><MinusSquareFilled /></button></td>
                 <td>{BasketData.count}</td>
                 <td><button onClick={() => IncraseBook(BasketData)} ><PlusSquareFilled /></button></td>
                 <td><button className='btn btn-danger' onClick={() => DeleteBasketData(BasketData)} >X</button></td>
               </tr>
             )))
           }
 
         </tbody>
       </Table>
       <span>Total:{total} </span>
     </div>
  )
 }
    </div>
  )
}

export default Basket