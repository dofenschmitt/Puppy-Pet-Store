import styled from 'styled-components';

export const Container = styled.div`    
    
   
    text-align: center;
    width: 100%;
    
    @media(max-width: 1400px){
        display: block;
    }
    @media(max-width: 700px){
        display:none;
    }

`;
export const Row = styled.div`
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2px;

    
    p{
        text-transform: uppercase;
    }    
`;
