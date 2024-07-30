import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px; 
  padding: 20px; 
  margin: 20px; 
  width: 220px; 
  text-align: center;
  background-color: #f9f9f9; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s, box-shadow 0.3s; 

  &:hover {
    transform: scale(1.1); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  }

  @media (max-width: 768px) {
    width: 160px;
    padding: 16px;
    margin: 16px;
  }

  @media (max-width: 480px) {
    width: 130px;
    padding: 12px;
    margin: 12px;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 16px;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

const KnownForList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0;
`;

const KnownForItem = styled.li`
  margin: 4px 0;
  font-size: 0.9em;
  color: #555;
`;

const PersonCard = ({ person }) => {
  return (
    <Card>
      <Avatar src={`${process.env.REACT_APP_BASEIMGURL}/${person.profile_path}`} alt={`${person.name}'s avatar`} />
      <Name>{person.name}</Name>
      <KnownForList>
        {person.known_for.map((movie) => (
          <KnownForItem key={movie.id}>{movie.title}</KnownForItem>
        ))}
      </KnownForList>
    </Card>
  );
};

export default PersonCard;