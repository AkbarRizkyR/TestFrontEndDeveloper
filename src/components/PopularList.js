import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { getMovieList } from "../api/api";
import MovieCard from "./MovieCard";

import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'; // Import icon


const Title = styled.h1`

  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StarIcon = styled.span`

  color: gold;
  margin-left: 10px;
  font-size: 2rem;
`;

const SliderContainer = styled.div`

  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  align-items: center; 
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: 25%;
  scroll-snap-align: start;
  padding: 10px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;


const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  user-select: none;
  margin: 0 10px;
`;


const PopularList = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);
  const scrollLeft = () => {
    document.getElementById('slider').scrollBy({ left: -300, behavior: 'smooth' });
  };
  const scrollRight = () => {
    document.getElementById('slider').scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <Title>
        Film Populer
        <StarIcon>★</StarIcon> {/* Tambahkan icon bintang */}
      </Title>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Arrow onClick={scrollLeft}><FaCircleArrowLeft /></Arrow> {/* Gunakan icon FaCircleArrowLeft */}
        <SliderContainer id="slider">
          {popularMovies.map((movie, i) => (
            <Slide key={movie.id || i}>
              <MovieCard movie={movie} />
            </Slide>
          ))}
        </SliderContainer>
        <Arrow onClick={scrollRight}><FaCircleArrowRight /></Arrow> {/* Gunakan icon FaCircleArrowRight */}
      </div>
    </>
  );
};
export default PopularList;
