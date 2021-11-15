//file: src/webpages/mybooks.js
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Map } from 'immutable';

const MyBooks = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    //
    let book = Map({ title: 'Naruto'});
    function publish(book){
        // book.isPunlished = true;
        return book.set('isPublished', true);
    }
    // test
    console.log('book before: ', book);
    // console.log('get book: ', book.get('title'))
    console.log('get book before (js): ', book.toJS())
    book = publish(book);
    console.log('book after: ', book);
    console.log('get book after (js): ', book.toJS())
    return (
        <Container>
            <h1>Book App</h1>
            <p>These are my books...</p>
        </Container>
    );
};
export default MyBooks;