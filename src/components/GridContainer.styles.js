import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;
export const Title = styled.div`
    font-size: 24px;
    font-weight: lighter;
    margin: 20px 5px;

`;
export const Row = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
    grid-gap: 25px; 
 
`;
// export const Row =styled.div`
    
// `;
// display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    // grid-gap: 25px;

    // @media(max-width: 1400px){
    //     grid-template-columns: 100%;
    // }