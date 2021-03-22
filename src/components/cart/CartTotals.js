import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width:100%;
`;
const Row = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 5px auto;
`;
const Button = styled.button`
    border: 3px solid #f44336;
    background-color: white;
    color: red;
    padding: 14px 28px;
    font-size: 1.1rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.3s linear;

    &:hover{
        background: #f44336;
        color: white;
    }
`;

export default function CartTotal({value} ) {
    const {cartSubTotal, cartTax, cartTotal,clearCart} = value;


    return (
        <>
        <Container>
            <Row>
                <Link to='/'>
                    <Button onClick={() => clearCart()}>clear cart</Button>
                </Link>
                <h5>
                    <span>subtotal : </span>
                    <strong>$ {cartSubTotal}</strong>
                </h5>
                <h5>
                    <span>tax : </span>
                    <strong>$ {cartTax}</strong>
                </h5>
                <h5>
                    <span>total : </span>
                    <strong>$ {cartTotal}</strong>
                </h5>
            </Row>
        </Container>  
        </>
    )
}
