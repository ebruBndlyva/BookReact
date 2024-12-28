import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { FavoriteContext } from '../../../context/FavoriteContext';
import { BasketContext } from '../../../context/BasketContext';

function UserNavbar() {
  let {favorites}=useContext(FavoriteContext)
  let {basket}=useContext(BasketContext)
  return (
    <Navbar className='position-fixed w-100  ' style={{ backgroundColor: "#441508", color: 'white',zIndex:"10",top:"0" }}>
      <Container className='d-flex gap-5'>
        <Navbar.Brand style={{ color: "white", fontSize: "30px" }}>BOOKSTORE</Navbar.Brand>
        <Nav className="me-auto d-flex gap-3">
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              color: isActive ? "#F39E60" : "white",textDecoration:"none"
            })}
          >
            Home
          </NavLink>
          <NavLink 
            to="/books" 
            style={({ isActive }) => ({
              color: isActive ? "#F39E60" : "white",textDecoration:"none"
            })}
          >
            Books
          </NavLink>
        </Nav>
        <div className="nav-btns d-flex gap-3">
          <NavLink className='btn btn-secondary'  style={({ isActive }) => ({
              color: isActive ? "#F39E60" : "white"
            })} to="/favorites">
              Favorites
            {/* <HeartOutlined /> */}
            <span style={{marginLeft:"10px"}}>{favorites.length}</span>
          </NavLink>
          <NavLink  className='btn btn-secondary'  style={({ isActive }) => ({
              color: isActive ? "#F39E60" : "white"
            })} to="/basket">
            {/* <ShoppingCartOutlined /> */}
            Basket
            <span style={{marginLeft:"10px"}}>{basket.length}</span>
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;
