import React from 'react';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Row = styled.div`
    text-transform: capitalize;
    margin: 2px 0;
    align-items: center;
    justify-content: center;
    

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2px;

    @media( max-width: 700px){
        display: block;
    }

    img{
        width: 7rem;
        height: 7rem;
        margin: 1.1rem 0 0  0;
        overflow: hidden;
    }
`;
const Small = styled.span`
    @media(min-width: 700px){
        display: none;
    }
`;
const Btn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span{
        margin: 0 7px;
        padding: 0 7px;
    }

`;
const BtnBlack = styled.button`
    background: tranparent;
    text-transform: capitalize;
    font-size: 1.2rem;
    width: 2rem;
    height: 2rem;
    color: #232528;
    border-radius: 0;
    border: 0.1rem solid #232528;
    

    &:hover{
        background: #232528;
        color: #f3f3f3;
    }
    
`;
const CartRemove = styled.div`
    cursor: pointer;
    font-size: 1.2rem;
    color: #ffa400;
`;

export default function CartItem({value, item}) {
    const {id, title, image, price, total, count , alt} = item;
    const { increment, decrement, removeItem } =value;

    return (
        <Row>
            <img src={image} alt={alt} />
            <div>
                <p><Small>product : </Small>{title}</p>
            </div>
            <div>
                <p><Small>price : </Small>$ {price}</p>
            </div>
            <div> 
                <Btn>
                    <BtnBlack onClick={() => decrement(id)}>-</BtnBlack>
                    <span>{count}</span>
                    <BtnBlack onClick={() => increment(id)}>+</BtnBlack>
                </Btn>
            </div>
            <div>
                <CartRemove onClick={() => removeItem(id)}>
                    <DeleteForeverIcon />
                </CartRemove>
            </div>
            <div>
                <strong>item total: $ {total}</strong>
            </div>
        </Row>
    )
}
