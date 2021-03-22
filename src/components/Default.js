import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1,h2{
        font-style: 5rem;
        font-weight: 900;
    }

`;

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <Container>
                <Row>
                    <h1>
                        404
                    </h1>
                    <h2>
                    error
                    </h2>
                    <h3>
                    page not found
                    </h3>
                    <h3>
                    the requested URL {" "} not found
                    </h3>
                </Row>                
            </Container>
        )
    }
}
