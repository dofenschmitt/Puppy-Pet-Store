import React, { Component } from 'react';
import * as s from './Cart.style';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../contextAPI';
import CartList from './CartList';
import CartTotal from './CartTotals';


export default class Cart extends Component {
    render() {
        return (
            <s.Container>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;

                        if(cart.length > 0){
                            return ( 
                                <>
                                    <s.Title>
                                        <h1>Your  Cart</h1>
                                    </s.Title>
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                                </> 
                            );
                        }
                        else{
                            return (
                                <EmptyCart />
                            );
                        }
                    }}
                    
                </ProductConsumer>
            </s.Container>
        )
    }
}
