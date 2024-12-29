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
import style from "./style.module.css"

function UserBooks() {

  let { bookData, setBookData, originalBook } = useContext(BookContext);
  let { favorites, setFavorites } = useContext(FavoriteContext);
  let { basket, setBasket } = useContext(BasketContext);





  function AddFavorites(book) {
    let findFavorite = favorites.find(favorite => favorite.id === book.id);
    if (findFavorite) {
      alert("Bu məhsul artıq favoritslərdə var");
    } else {
      setFavorites([...favorites, book]);
    }
  }


  function AddBasket(book) {
    let findedBasket = basket.find(basketEl => basketEl.id === book.id);
    if (findedBasket) {
      findedBasket.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...book, count: 1 }]);
    }
  }


  function handleSearch(inputValue) {
    const trimmedValue = inputValue.trim().toLowerCase();

    if (!trimmedValue) {
      setBookData(originalBook);
      return;
    }

    const filteredData = originalBook.filter(({ title }) =>
      title.toLowerCase().includes(trimmedValue)
    );

    setBookData(filteredData);
  }
  function handleSort() {
  let sortBooks =   bookData.toSorted((a, b) => a.title.localeCompare(b.title))
    if(JSON.stringify(sortBooks)!=JSON.stringify(bookData)){
      setBookData(sortBooks)
    }else{
      setBookData(originalBook)
    }
  }

  return (
    <main style={{ marginTop: "100px", marginBottom: "150px" }}>
      <div className="cards" style={{ width: "90%", margin: "0 auto" }}>
        <Container fluid="md">
          <input
            className={style.search}
            type="text"
            placeholder='Search'
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button className={style.sortBtn} onClick={() => handleSort()}>Sort</button>
          <Row>
            {
              bookData.length > 0 ? (
                bookData.map((book) => (
                  <Col key={book.id}>
                    <Card style={{ width: '18rem', margin: "20px", padding: "20px" }}>
                      <Card.Img
                        style={{ width: "100%", height: "200px", objectFit: "cover" }}
                        variant="top"
                        src={book.image}
                      />
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
                        <Button
                          color="danger"
                          variant="filled"
                          onClick={() => AddFavorites(book)}
                        >
                          <HeartOutlined />
                        </Button>
                        <Button
                          className='mx-3'
                          color="primary"
                          variant="filled"
                          onClick={() => AddBasket(book)}
                        >
                          <ShoppingCartOutlined />
                        </Button>
                        <Button color='default' variant='filled'>
                          <Link to={`/books/${book.id}`}><InfoCircleOutlined /></Link>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p>No books found.</p>
              )
            }
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default UserBooks;
