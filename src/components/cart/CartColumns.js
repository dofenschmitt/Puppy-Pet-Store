import React from 'react';
import * as s from './CartColumns.style'

export default function CartColumns() {
    return (
        <s.Container>
            <s.Row>
                <div>
                    <p>products</p>
                </div>
                <div>
                    <p>name</p>
                </div>
                <div>
                    <p>price</p>
                </div>
                <div>
                    <p>quantity</p>
                </div>
                <div>
                    <p>remove</p>
                </div>
                <div>
                    <p>total</p>
                </div>
            </s.Row>
        </s.Container>
        
    );
}