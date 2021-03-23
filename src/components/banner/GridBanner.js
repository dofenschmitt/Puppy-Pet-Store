import React, { Component } from 'react';
import * as s from '../Product.styles';
import * as r from './GridBanner.style';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../contextAPI';


export default class GridBanner extends Component {
    
    render() {
        return (
            <r.Container>
                <r.Row>
                    <s.Cart>
                        <ProductConsumer>
                            {(value) => {
                                const { id, title, image, price, inCart,alt} = value.products;
                                <s.ImgContainer onClick={() => console.log('you clicked me')}>
                                <Link to="/products">
                                    <s.Img src={image} alt={alt} />
                                </Link>
                                <button>
                                    Banner here
                                </button>
                                </s.ImgContainer>
                            }

                            }
                        </ProductConsumer>
                    </s.Cart>
                </r.Row>
            </r.Container>
                    
                

        )
    }
}
