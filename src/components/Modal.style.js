import styled from 'styled-components';


export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0; 
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    #modal{
        background: #f3f3f3;
    }
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;

`;
export const Container = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
`;
export const Row = styled.div`
    width: 50vw;
    
`;
export const Title = styled.div`
    
    text-transform: capitalize;
    display: flex;
    flex-direction : column;
    justify-content: space-around;
    align-items: center;
    
    overflow: hidden;
    height: 500px;

    img{
        width:300px;

    }
    h3{
        font-weight: 800;
        color: #009ffd;
    }
    strong{
        color: #009ffd;
        font-style: 3rem;
    }


`;