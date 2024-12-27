import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
function AdminNavbar() {
  return (
    <div>       <Navbar className='position-fixed w-100  ' style={{ backgroundColor: "#441508", color: 'white',zIndex:"10",top:"0" }}>
    <Container className='d-flex gap-5'>
      <Navbar.Brand style={{ color: "white", fontSize: "30px" }}>BOOKSTORE</Navbar.Brand>
      <Nav className="me-auto d-flex gap-3">
        <NavLink 
          to="/admin" 
          style={({ isActive }) => ({
            color: isActive ? "#F39E60" : "white",textDecoration:"none"
          })}
        >
         Dashboard
        </NavLink>
        <NavLink 
          to="adminbooks" 
          style={({ isActive }) => ({
            color: isActive ? "#F39E60" : "white",textDecoration:"none"
          })}
        >
          Books
        </NavLink>
        <NavLink 
          to="addbook" 
          style={({ isActive }) => ({
            color: isActive ? "#F39E60" : "white",textDecoration:"none"
          })}
        >
         Add
        </NavLink>
      </Nav>
 
    </Container>
  </Navbar></div>
  )
} 

export default AdminNavbar