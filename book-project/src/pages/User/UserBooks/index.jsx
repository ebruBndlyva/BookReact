import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { HeartOutlined, InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from "antd";
import Col from 'react-bootstrap/Col';
import axios from "axios"
function UserBooks() {
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


  return (
    <main style={{ marginTop: "100px",marginBottom:"100px" }}>
      <div className="cards" style={{ width: "90%", margin: "0 auto" }}>
        <Container fluid="md">
          <Row>
            {
              bookData.map(({ id, title, description, price, author, pagesCount, publishedYear, genre, language, image }) => (
                <Col key={id} >
                  <Card style={{ width: '18rem',margin:"20px",padding:"20px " }}>
                    <Card.Img style={{ width: "100%", height: "200px", objectFit: "cover" }} variant="top" src={image} />
                    <Card.Body>
                      <Card.Title>{title.slice(0,10)}...</Card.Title>
                      <Card.Text>
                        {description.slice(0,10)}...
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{price}</ListGroup.Item>
                      <ListGroup.Item>{author}</ListGroup.Item>
                      <ListGroup.Item>{pagesCount}</ListGroup.Item>
                      <ListGroup.Item>{publishedYear}</ListGroup.Item>
                      <ListGroup.Item>{genre}</ListGroup.Item>
                      <ListGroup.Item>{language}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    <Button  color="danger" variant="filled"><HeartOutlined/></Button>
                    <Button className='mx-3' color="primary" variant="filled"><ShoppingCartOutlined/></Button>
                    <Button color='default' variant='filled' onClick={()=>detailPage(id)} ><InfoCircleOutlined /></Button>
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