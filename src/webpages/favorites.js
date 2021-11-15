//file: src/webpages/favorites.js
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
const Favorites = () => {
    useEffect(() => {
        document.title = 'My Favorites';
    });
    return (
        <Container>
            <h1>Book App</h1>
            <p>These are my favorite books</p>
        </Container>
    );
};
export default Favorites;