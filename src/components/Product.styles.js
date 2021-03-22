import styled from 'styled-components';


export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
 
    height: 100%;

    border-color: transparent ;
    transition: all 0.3s linear;



    
`;
export const ImgContainer = styled.div`
width: 100%;
height: 100%;
position: relative;
overflow: hidden;
`;
export const Img =  styled.img`

width: 100%;
height: 100%;
object-fit: cover;
transition: all 0.3s linear;


`;

export const Button = styled.button`
    position : absolute; 
    bottom: 0;
    right: 0;

    z-index: 10;
    padding: 0.2rem 0.4rem;
    background: rgba(0,56,144,0.6);
    border: none; 
    color: rgb(253,254,222);
    font-size: 1.4rem;
    border-radius:  0.5rem 0 0 0 ;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;

    &:hover{
        color: rgb(0,56,244);
        cursor: pointer;
    }
    
`;
export const CartFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-weight: bold;
    
    
    background: transparent;
    border-top: transparent;
    transition : all 0.3s linear;


    p{
        align-items: align-self;
        justify-content: center;
        margin: 0.3rem 0 ;
        font-style: 2rem;
        color: black;
    }
    h5{
        color: black;
        font-style: 2rem;
        margin-bottom: 0;

        span{
            margin-left: 5px;
        }
    }
`;
export const ProductWrapper = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
max-height: 300px;

    &:hover{
        ${Cart} {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        ${CartFooter}{
            background: rgba(247, 247, 247);
        }
    }
    ${ImgContainer} {
        &:hover{
            ${Img}{
                transform: scale(1.2);
            }
            ${Button}{
                transform: translate(0,0);
            }
        }
    }

`;
