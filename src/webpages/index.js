//file: src/webpages/index.js
import React from 'react';
import {
  NavLink,
  BrowserRouter,
  Route,
  Routes,
//   Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Home from './home';
import MyBooks from './mybooks';
import Favorites from './favorites';
const Webpages = () => {
    return(
        <div>
            <BrowserRouter>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/mybooks">My Books</Nav.Link>
                            <Nav.Link as={NavLink} to="/favorites">Favorites</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
                {/* <nav>
                    <ul>
                        <li>
                            <NavLink 
                                exact to="/" 
                                activeClassName="selected">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/mybooks" 
                                activeClassName="selected">
                                My Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/favorites" 
                                activeClassName="selected">
                                Favorites
                            </NavLink>
                        </li>
                    </ul>
                </nav> */}
        
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path = "/mybooks" element = {<MyBooks />} />
                    <Route path = "/favorites" element = {<Favorites />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default Webpages;