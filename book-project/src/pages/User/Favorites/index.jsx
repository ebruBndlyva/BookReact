import React, { useContext } from 'react'
import { FavoriteContext } from '../../../context/FavoriteContext'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { HeartOutlined, InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from "antd";
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
function Favorites() {
  let { favorites ,setFavorites} = useContext(FavoriteContext)
  function favDelete(id){
    let findDel = favorites.filter(favDel =>favDel.id !=id)
    setFavorites(findDel)
  }
  return (
    <main style={{ marginTop: "100px", marginBottom: "150px", marginBottom: "100px" }}>
      <div className="cards" style={{ width: "90%", margin: "0 auto" }}>
        <Container fluid="md">
          <Row>
            {
              favorites.map((book) => (
                <Col key={book.id} >
                  <Card style={{ width: '18rem', margin: "30px", padding: "30px", margin: "20px", padding: "20px " }}>
                    <Button onClick={()=>favDelete(book.id)} style={{
                      width: "50px", height: "40px", position: "absolute", bottom: "10px", right: "10px"
                    }} className='btn btn-danger'>X</Button>
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
                      <Button className='mx-3' color="primary" variant="filled"><ShoppingCartOutlined /></Button>
                      <Button color='default' variant='filled'><Link to={`/admin/adminbooks/${book.id}`}><InfoCircleOutlined /></Link></Button>
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

export default Favorites