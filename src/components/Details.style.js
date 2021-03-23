import styled from 'styled-components';


export const Container = styled.div`
    padding: 5px 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-style: 3rem;
`;


export const Title = styled.div`
    text-align: center;
    margin: 5px 0;
    padding: 5px;
`;

export const Row = styled.div`
    width: 90%;
    margin: 10px 0;
    display : grid;
    grid-template-columns: 50% 50%;
    grid-gap: 20px;
    
    @media(max-width: 1400px){
        grid-template-columns: 100%;
    }
`;

export const ImgContainer = styled.div`
    width: 100%;
    align-self: center;
    overflow: hidden;

    img{
        height:500px;
        width:100%;
        object-fit: cover;
        transition: all 1s linear;

        &:hover{
            transform: scale(1.1);
        }

    }
`;

export const Text = styled.div`
    font-style: 2.5rem;
    h2{
        text-transform: capitalize;
        padding: 5px 0;
    }
    h4{
        text-transform: capitalize;
        padding: 10px 0;
        
        span{
            text-transform: uppercase;
            font-weight: 800;
            color: #f39a0a;
            padding-left: 10px; 
            
        }

    }
    p{
        span{
            font-weight: bold;
            text-transform: capitalize;
            margin-bottom: 5px;
        }
    }

`;
export const ActionButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 10px 0;
    padding: 10px 0;
`;