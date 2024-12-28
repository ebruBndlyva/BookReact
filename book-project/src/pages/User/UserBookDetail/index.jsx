import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { HeartOutlined, InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from "antd";
import Col from 'react-bootstrap/Col';

function UserBookDetail() {
  let [detailData, setDetailData] = useState({})
  let detailId = useParams()

  useEffect(() => {
    axios.get(`http://localhost:4000/books/${detailId.id}`)
    .then((res)=>{
      setDetailData(res.data)
    })
  })
  return (
    <div style={{marginTop:"150px"}}>
         <Row>
            
            
                <Col key={detailData.id} >
                  <Card style={{ width: '18rem', margin: "30px",padding:"30px",margin:"20px",padding:"20px " }}>
                    <Card.Img style={{ width: "100%", height: "200px", objectFit: "cover" }} variant="top" src={detailData.image} />
                    <Card.Body>
                      <Card.Title>{detailData.title}</Card.Title>
                      <Card.Text>
                        {detailData.description}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{detailData.price}</ListGroup.Item>
                      <ListGroup.Item>{detailData.author}</ListGroup.Item>
                      <ListGroup.Item>{detailData.pagesCount}</ListGroup.Item>
                      <ListGroup.Item>{detailData.publishedYear}</ListGroup.Item>
                      <ListGroup.Item>{detailData.genre}</ListGroup.Item>
                      <ListGroup.Item>{detailData.language}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    <Button  color="danger" variant="filled"><HeartOutlined/></Button>
                    <Button className='mx-3' color="primary" variant="filled"><ShoppingCartOutlined/></Button>
                    <Button color='default' variant='filled' ><InfoCircleOutlined /></Button>
                    </Card.Body>
                  </Card>
                </Col>
          

          </Row>
    </div>
  )
} 

export default UserBookDetail