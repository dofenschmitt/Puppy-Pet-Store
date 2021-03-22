import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
white-space: nowrap;
outline: none;
border: none;
min-width: 100px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
transition: 0.3s;
display: flex;
justify-content: center;
align-items: center;
padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
font-size: ${({big}) => (big ? '20px' : '14px')};

&:hover {
    transform: translateY(-2px);
}


`;

export const ButtonActions = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transperent;
    border: 0.05rem solid #009ffd;
    border-color: ${props => props.cart ? "#ffa400" :"#009ffd"};
    color: ${props => props.cart ? "#ffa400" : "#009ffd"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer ;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;

    &:hover{
        background: ${props => props.cart ? "#ffa400" : "#009ffd" };
        color: #2a2a72;
    }
    &:focus{
        outline: none;
    }

`;