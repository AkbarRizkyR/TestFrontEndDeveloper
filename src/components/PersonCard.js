import React from 'react';
import styled from 'styled-components';

// Styled component for the card container
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

// Styled component for the avatar image
const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 16px;
`;

// Styled component for the person's name
const Name = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

// Styled component for the list of known movies
const KnownForList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0;
`;

// Styled component for each movie item
const KnownForItem = styled.li`
  margin: 4px 0;
  font-size: 0.9em;
  color: #555;
`;

// PersonCard component to display person's information
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

// Exporting the PersonCard component
export default PersonCard;