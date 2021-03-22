import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justufy-content: center;
    text-transform: uppercase;
    
`;

export default function EmptyCart() {
    return (
        <Container>
            <h1>your cart is currently empty</h1>
        </Container>
    )
}
