import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

`;
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
    grid-gap: 20px;

`;
