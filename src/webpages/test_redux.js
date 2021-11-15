import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const TestRedux = () => {
    useEffect(() => {
        document.title = 'My Redux';
    });

    return (
        <Container>
            <h1>Book Redux</h1>
            <p>These are my redux...</p>
        </Container>
    );
};

export default TestRedux;