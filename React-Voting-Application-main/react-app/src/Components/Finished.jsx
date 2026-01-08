import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;                     
    flex-direction: column;            
    justify-content: flex-start;       
    align-items: center;               
    height: 100vh;                     
    padding: 2rem 0;                  
    background-color: #f0f4f8;        
    color: #333;
`;

const Title = styled.h1`
    color: #6e45e2;
    margin-bottom: 1.5rem;
`;

const Table = styled.table`
    width: 100%;
    max-width: 600px;
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
    text-align: center;               
`;

const Winner = styled.p`
    font-weight: bold;                 
    font-size: 1.5rem;                
    margin-top: 1rem;                 
    color: #6e45e2;                    
`;

const Finished = (props) => {
    // Sort candidates by vote count in descending order
    const sortedCandidates = [...props.candidates].sort((a, b) => b.voteCount - a.voteCount);

    // Find the candidate with the maximum votes (now first in the sorted array)
    const winner = sortedCandidates[0];

    return (
        <Container>
            <Title>Voting is Finished</Title>
            <Table>
                <thead>
                    <tr>
                        <Th>Index</Th>
                        <Th>Candidate Name</Th>
                        <Th>Candidate Votes</Th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCandidates.map((candidate, index) => (
                        <tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{candidate.name}</Td>
                            <Td>{candidate.voteCount}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {sortedCandidates.length > 0 && (
                <Winner>
                    Winner: {winner.name} wins with {winner.voteCount} vote
                </Winner>
            )}
        </Container>
    );
};

export default Finished;
