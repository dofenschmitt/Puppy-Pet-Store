import React from 'react';
import * as s from './GridContainer.styles' ;
import { ProductConsumer } from '../contextAPI';
import Product from './Product';


function GridContainer({items}) {
    return (
        <s.Container>
            <s.Title>
                <h1>Products Features</h1>
            </s.Title>
            <s.Row>
                <ProductConsumer>
                    {(value) => {
                        return value.products.map( product => {
                        
                            return  <Product key = {product.id} product = {product}/>;
                            
                        })
                    }}
                </ProductConsumer>
            </s.Row>
        </s.Container>
    )
}

export default GridContainer
