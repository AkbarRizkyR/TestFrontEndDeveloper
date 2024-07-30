import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getMovieList } from "../api/api";
import imdbLogo from '../assets/icons/imdb.svg';

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  transition: background-image 0.5s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); // Anda bisa menyesuaikan nilai opacity di sini
    z-index: 1;
  }
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  inset: 0;
  color: white;
  padding: 1rem;
  width: 60%;
  height: 100%;
  z-index: 2;
`;

const Content = styled.div`
  max-width: 50%;
  margin-left: 5rem;
  padding: 1.5rem;
  text-align: left;
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 42px;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 1.3;
  margin-bottom: 1rem;
  text-align: justify;
  color: rgba(255, 255, 255, 0.8);
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const IMDbLogo = styled.img`
  height: 20px;
  margin-right: 10px;
`;

const Rating = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #ffd700;
`;

const Banner = () => {
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            const movieList = await getMovieList();
            setMovies(movieList.slice(0, 5));
        };
        fetchMovies();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [movies]);

    const currentMovie = movies[currentIndex];

    return (
        <BannerWrapper $backgroundImage={`https://image.tmdb.org/t/p/original${currentMovie?.poster_path}`}>
            <Overlay>
                <Content>
                    <Title>{currentMovie?.title}</Title>
                    <RatingContainer>
                        <IMDbLogo src={imdbLogo} alt="IMDb" />
                        <Rating>{currentMovie?.vote_average}/100</Rating>
                    </RatingContainer>
                    <Description>{currentMovie?.overview}</Description>
                    <ButtonContainer>
                        {/* Tambahkan tombol-tombol di sini jika diperlukan */}
                    </ButtonContainer>
                </Content>
            </Overlay>
        </BannerWrapper>
    );
};

export default Banner;