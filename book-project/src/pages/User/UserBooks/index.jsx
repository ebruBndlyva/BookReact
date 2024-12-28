import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { HeartOutlined, InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from "antd";
import Col from 'react-bootstrap/Col';
import { BookContext } from '../../../context/BookContext';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../../../context/FavoriteContext';
import { BasketContext } from '../../../context/BasketContext';

function UserBooks() {
  let { bookData } = useContext(BookContext)
  let { favorites, setFavorites } = useContext(FavoriteContext)
  let { basket, setBasket } = useContext(BasketContext)
  //Favorites

  function AddFavorites(book) {

    let findFavorite = favorites.find(favorite => favorite.id == book.id)
    if (findFavorite) {
      alert("Bu mehsul artiq favoritslerde var")
    } else {
      setFavorites([...favorites, book])
    }
  }
  function AddBasket(book) {
    let findedBasket = basket.find(basketEl => basketEl.id == book.id)
    if (findedBasket) {
      findedBasket.count++
      setBasket([...basket])
    }else{
      setBasket([...basket,{...book,count:1}])
    }
  }


  return (
    <main style={{ marginTop: "100px", marginBottom: "150px", marginBottom: "100px" }}>
      <div className="cards" style={{ width: "90%", margin: "0 auto" }}>
        <Container fluid="md">
          <Row>
            {
              bookData.map((book) => (
                <Col key={book.id} >
                  <Card style={{ width: '18rem', margin: "30px", padding: "30px", margin: "20px", padding: "20px " }}>
                    <Card.Img style={{ width: "100%", height: "200px", objectFit: "cover" }} variant="top" src={book.image} />
                    <Card.Body>
                      <Card.Title>{book.title.slice(0, 10)}...</Card.Title>
                      <Card.Text>
                        {book.description.slice(0, 10)}...
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{book.price}</ListGroup.Item>
                      <ListGroup.Item>{book.author}</ListGroup.Item>
                      <ListGroup.Item>{book.pagesCount}</ListGroup.Item>
                      <ListGroup.Item>{book.publishedYear}</ListGroup.Item>
                      <ListGroup.Item>{book.genre}</ListGroup.Item>
                      <ListGroup.Item>{book.language}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Button color="danger" variant="filled" onClick={() => AddFavorites(book)}><HeartOutlined /></Button>
                      <Button className='mx-3' color="primary" variant="filled" onClick={() => AddBasket(book)}><ShoppingCartOutlined /></Button>
                      <Button color='default' variant='filled'><Link to={`/books/${book.id}`}><InfoCircleOutlined /></Link></Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }

          </Row>
        </Container>


      </div>
    </main>
  )
}

export default UserBooks 