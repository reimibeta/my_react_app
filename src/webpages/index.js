//file: src/webpages/index.js
import React from 'react';
import {
  NavLink,
  BrowserRouter,
  Route,
  Routes,
//   Link
} from "react-router-dom";
import Home from './home';
import MyBooks from './mybooks';
import Favorites from './favorites';
const Webpages = () => {
    return(
        <div>
            <BrowserRouter>
                <nav>
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
                </nav>
        
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