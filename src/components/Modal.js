import React, { Component } from 'react';
import * as s from './Modal.style';

import { ProductConsumer } from '../contextAPI';
import { ButtonActions } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { image, title, price, alt } = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else {
                        return(
                        <s.ModalContainer>
                            <s.Container>
                                <s.Row>
                                    <s.Title id="modal">
                                        <h3>Item added to cart</h3>
                                        <img src={image}  alt={alt}/>
                                        <h4>{title}</h4>
                                        <h5>price: <strong>{price}</strong></h5>
                                        <Link to ="/">
                                            <ButtonActions onClick={() => closeModal()}>
                                                continue shopping
                                            </ButtonActions>
                                        </Link>
                                        <Link to ="/cart">
                                        <ButtonActions cart onClick={() => closeModal()}>
                                                go to cart
                                            </ButtonActions>
                                        </Link>
                                    </s.Title>
                                </s.Row>
                            </s.Container>
                        </s.ModalContainer>
                        )
                    }
                }
                }
            </ProductConsumer>
        );
    }
}
