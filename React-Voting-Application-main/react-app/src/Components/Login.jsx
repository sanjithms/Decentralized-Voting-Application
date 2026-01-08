import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #6e45e2, #88d3ce);
    color: #fff;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    animation: fadeIn 1.5s ease-in-out;
`;

const Button = styled.button`
    padding: 0.75rem 2rem;
    font-size: 1.2rem;
    color: #6e45e2;
    background-color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
        background-color: #ffdd99;
    }
`;

const Login = (props) => (
    <Container>
        <Title>Welcome to Decentralized Voting Application</Title>
        <Button onClick={props.connectWallet}>Login with MetaMask</Button>
    </Container>
);

export default Login;
