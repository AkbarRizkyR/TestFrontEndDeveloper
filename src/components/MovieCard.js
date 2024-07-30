import styled from "styled-components";
import imdbLogo from '../assets/icons/imdb.svg';


// Styled component untuk Card
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

// Styled component untuk gambar film
const MovieImage = styled.img`

  width: 100%;
  height: auto;
  border-radius: 8px; 
  margin-bottom: 12px; 

`;

// Styled component untuk judul film

const MovieTitle = styled.h3`

  margin: 12px 0; 
  font-size: 1.4rem; 
  color: #222; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Styled component untuk informasi film
const MovieInfo = styled.p`

  margin: 6px 0; 
  font-size: 1rem; 
  color: #666; 


  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

`;

// Styled component untuk container rating

const RatingContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center; 
  margin-bottom: 1.2rem; 

`;

// Styled component untuk logo IMDb

const IMDbLogo = styled.img`

  height: 24px; 
  margin-right: 12px; 

`;

// Styled component untuk rating

const Rating = styled.span`

  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 20px; 
  color: #ffcc00; 

`;

// Komponen MovieCard
const MovieCard = ({ movie }) => {

    return (
        <Card>
            <MovieImage
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieInfo>Rilis: {movie.release_date}</MovieInfo>
            <RatingContainer>
                <IMDbLogo src={imdbLogo} alt="IMDb" />
                <Rating>{movie.vote_average}/10</Rating> 
            </RatingContainer>
        </Card>
    );
};


export default MovieCard;