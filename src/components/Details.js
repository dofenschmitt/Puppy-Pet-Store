import React, { Component } from 'react';
import * as s from './Details.style';
import { ProductConsumer } from '../contextAPI';
import { Link } from 'react-router-dom';
import { ButtonActions } from './Button';



export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {

                const {id, company, image, info, price, title, inCart,alt} = value.detailProduct;
                    return(
                        <s.Container>
                            {/* start title */}
                            <s.Title>
                                <h1> {title} </h1>
                            </s.Title>
                            {/* End title */}

                            {/* start product info */}
                            <s.Row>
                                {/* image */}
                                <s.ImgContainer>
                                    <img src= {image} alt={alt} />
                                </s.ImgContainer>
                                {/* text */}
                                <s.Text>
                                    <h2>model: {title}</h2>
                                    <h4> made by:
                                            <span>{company}</span>
                                    </h4>
                                    <h4>
                                        <strong>
                                            price : <span>$ {price}</span>
                                        </strong>
                                    </h4>
                                    <p><span>some infos about the product: </span></p>
                                    <p>{info}</p>
                                {/*  action Buttons */}
                                    <s.ActionButton>
                                        <Link to="/">
                                            <ButtonActions>Back to product</ButtonActions>
                                        </Link>
                                        <ButtonActions cart
                                        disabled={inCart ? true : false }
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        } } >
                                            {inCart ? 'In Cart' : 'Add to Cart'}
                                        </ButtonActions>
                                    </s.ActionButton>
                                </s.Text>
                            </s.Row>

                        </s.Container>

                    );
                }}
            </ProductConsumer>
        )
    }
}
