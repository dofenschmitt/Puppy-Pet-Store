import styled from 'styled-components';


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
   
    
`;
export const Title = styled.section`
    font-size: 24px;
    font-weight: lighter;
    margin: 20px 5px;

`;
export const Row = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px; 

    @media(max-width: 1400px){
            grid-template-columns: 100%;
        }
 
`;