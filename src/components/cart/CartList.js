import React from 'react'
import CartItem from './CartItem';
import styled from 'styled-components';

const ContainerFluid = styled.div`
    width: 100%;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function CartList({ value }) {
    const { cart } = value;
    return (
        
        <ContainerFluid>
        {cart.map(item => {
            return <CartItem  key={item.id} item={item} value={value} />
            })
        }
            
        </ContainerFluid>
    )
}
