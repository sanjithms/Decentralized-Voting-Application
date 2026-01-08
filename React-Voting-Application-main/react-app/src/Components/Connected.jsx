import React from "react";
import styled from "styled-components";

// Wrapper to cover the full viewport and set the background color
const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0f7fa;
`;

const Container = styled.div`
    width: 90%;
    max-width: 800px;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Header = styled.h1`
    color: #6e45e2;
    margin-bottom: 2rem;
    text-align: center;
`;

// New Description styled component
const Description = styled.p`
    font-size: 1rem;
    color: #333;
    margin-bottom: 1.5rem;
    line-height: 1.5;
`;

const AccountInfo = styled.div`
    font-size: 1.1rem;
    margin: 1rem 0;
`;

const Label = styled.span`
    font-weight: bold;
    color: #6e45e2;
`;

const AlreadyVoted = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: #ff6b6b;
    background-color: #ffe0e0;
    padding: 0.5rem;
    border-radius: 5px;
    margin-top: 1rem;
`;

const Input = styled.input`
    padding: 0.5rem;
    font-size: 1rem;
    border: 2px solid #6e45e2;
    border-radius: 5px;
    margin-right: 1rem;
    outline: none;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #6e45e2;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #88d3ce;
    }
`;

const Table = styled.table`
    width: 100%;
    margin-top: 1rem;
    border-collapse: collapse;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Th = styled.th`
    padding: 0.75rem;
    background-color: #6e45e2;
    color: #fff;
`;

const Td = styled.td`
    padding: 0.75rem;
    border: 1px solid #ddd;
`;

const Connected = (props) => {
    return (
        <Wrapper>
            <Container>
                <Header>You are Connected to MetaMask</Header>
                
                {/* MetaMask account and remaining time information */}
                <AccountInfo>
                    <Label>MetaMask Account:</Label> {props.account}
                </AccountInfo>
                <AccountInfo>
                    <Label>Remaining Time:</Label> {props.remainingTime} s
                </AccountInfo>

                {/* Voting description */}
                <Description>
                    Welcome to the decentralized voting platform! Here, you can cast your vote for your preferred candidate securely and anonymously.
                    Make sure to select the candidate index correctly as your vote cannot be changed once submitted.
                </Description>

                {props.showButton ? (
                    // Already voted message with distinct styling
                    <AlreadyVoted>You have already voted</AlreadyVoted>
                ) : (
                    <div>
                        <Input 
                            type="number" 
                            placeholder="Enter Candidate Index" 
                            value={props.number} 
                            onChange={props.handleNumberChange} 
                        />
                        <Button onClick={props.voteFunction}>Vote</Button>
                    </div>
                )}

                <Table>
                    <thead>
                        <tr>
                            <Th>Index</Th>
                            <Th>Candidate Name</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.candidates.map((candidate, index) => (
                            <tr key={index}>
                                <Td>{index}</Td>
                                <Td>{candidate.name}</Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </Wrapper>
    );
};

export default Connected;
