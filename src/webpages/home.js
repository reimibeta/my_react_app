//file: src/webpages/home.js
import React from 'react';
import { Container } from 'react-bootstrap';
const Home = () => {
    const numbers = [1, 2, 3];
    const index = numbers.indexOf(2);
    // const adds = [numbers.slice(0, index)];
    // adding
    const added = [...numbers.slice(0, index), 4 , ...numbers.slice(index)];
    console.log('add: ', added);
    // removing
    const removed = numbers.filter(n => n !== 2);
    console.log('remove', removed);
    // updating
    const updated = numbers.map(n => n === 2 ? 20 : n);
    console.log('update', updated);
    // fetch
    numbers.map(n => {
        console.log('fetch: ', n);
    });
    return (
        <Container>
            <h1>Book App</h1>
            {
                numbers.map(n => {
                    return <p>{n}</p>
                })
            }
        </Container>
    );
};
export default Home;