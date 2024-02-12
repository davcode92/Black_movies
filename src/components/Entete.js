import React from 'react';
import {Container,Form, Nav, Navbar} from 'react-bootstrap';
import StarRating from './StarRating';
import AddMovie from './AddMovie';

const Entete = ({handleSearch, handleCategory}) => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">BLACK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            
          >
             <AddMovie  />
          </Nav>
          
          
          <select 
          name="" 
          id=""
          onChange={handleCategory}
          >
          <option value="ALL">Tout</option>
          <option value="Biopic">Biopic</option>
          <option value="Drama">Drame</option>
          <option value="Documentary">Documentaire</option>

          </select>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Recherche"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
        </Form>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Entete