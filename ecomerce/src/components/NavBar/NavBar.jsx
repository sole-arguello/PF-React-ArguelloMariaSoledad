import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWiget from '../CartWiget/CartWiget'



const NavBar = () => {
  return (

    <Navbar className='py-4 sticky-top' collapseOnSelect expand="lg" bg="warning" variant="">
      <Container >
        <Navbar.Brand className='fs-2' >
          Ala Cachufleta Ecomerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className=' px-5' id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='navLink conatiner px-5 text-dark fw-semibold fs-5 text-decoration-none' to='/' >Inicio</NavLink>
            <NavLink className='navLink px-5 text-dark fw-semibold fs-5 text-decoration-none' to='/categoria/Conjunto' >Conjuntos</NavLink>
            <NavLink className='navLink px-5 text-dark fw-semibold fs-5 text-decoration-none' to='/categoria/Top' >Top</NavLink>
            <NavLink className='navLink px-5 text-dark fw-semibold fs-5 text-decoration-none' to='/categoria/Bombis' >Bombis</NavLink>
          </Nav>
          <Nav >
            <Nav.Link eventKey={2} >
              <CartWiget   />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar