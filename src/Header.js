import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";
import { ProductConsumer } from './contextAPI'
// import { useStateValue } from "./StateProvider";
// import { auth } from "./firebase";

function Header() {
    // const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentification = () => {
        // if(user){
        //     auth.signOut();
        // } 
    }
    const user = [];

    return (
        <div className='header'>
            <Link to = '/'>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo here" className="header__logo" />
            </Link>
                        
            <LocationOnIcon className="header__optionBasket"/>
            <div className="header__option">
            
                    <span className="header__optionLineOne" >
                        Deliver to
                    </span>
                    <span className="header__optionLineTwo" >
                        
                        Russian Federation
                    </span>
            </div>

            <div className="header__search">
                <input className="header__searchInput" type="text"  />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentification} className="header__option">
                    <span className="header__optionLineOne" >
                        Hello {user ? user.email : 'Guest'}
                    </span>
                    <span className="header__optionLineTwo" >
                        {user ? 'Signe Out' : 'Signe In'}
                    </span>
                </div>
                </Link>
                <div className="header__option">
                <span className="header__optionLineOne" >
                        Returns
                    </span>
                    <span className="header__optionLineTwo" >
                        Orders
                    </span>
                </div>

                <div className="header__option">
                <span className="header__optionLineOne" >
                        Your 
                    </span>
                    <span className="header__optionLineTwo" >
                        Prime
                    </span>
                    
                </div>
                <ProductConsumer>
                    { value => {       
                            return (
                            <Link to = "/cart">
                                <div className="header__optionBasket">
                                        <ShoppingCartIcon />
                                    <span className="header__optionLineTwo header__basketCount">
                                        {value.itemNumber}
                                    </span> 
                                </div>
                            </Link>
                            )
                        }
                    }
                </ProductConsumer>
            </div>

        </div>
    )
}

export default Header
