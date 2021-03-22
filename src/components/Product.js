import React , { Component }from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../contextAPI';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import * as s from './Product.styles';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, image, price, inCart,alt} = this.props.product;
    return (
        <s.ProductWrapper>
            <s.Cart>
                <ProductConsumer>
                { (val) => (
                    <s.ImgContainer onClick={() => val.handleDetail(id)}>
                    <Link to="/details">
                        <s.Img src={image} alt={alt} />
                    </Link>
                    <s.Button  
                        disabled={inCart ? true : false } 
                        onClick={() =>{ 
                            val.addToCart(id);
                            val.openModal(id);
                        }}>
                        {inCart ? (<p>In Cart</p>) : (<ShoppingCartIcon />) }
                    </s.Button>
                    </s.ImgContainer>
                )}
                </ProductConsumer>
                    
                    
               
                {/* Cart footer  */}
                <s.CartFooter>
                    <p>{title}</p>
                    <h5>
                        <span>$ {price}</span>
                    </h5>
                </s.CartFooter>
                 
            </s.Cart>
        </s.ProductWrapper>
    );
}
}

Product.propTypes = {
    product:PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
        alt: PropTypes.string 

    }).isRequired
};

