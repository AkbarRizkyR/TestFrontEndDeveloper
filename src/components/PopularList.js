import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { getMovieList } from "../api/api";
import MovieCard from "./MovieCard";

import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'; // Import icon

// Styled component untuk judul
const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component untuk icon bintang
const StarIcon = styled.span`
  color: gold;
  margin-left: 10px;
  font-size: 2rem;
`;

// Styled component untuk container slider
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

// Styled component untuk setiap slide
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

// Styled component untuk panah navigasi
const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  user-select: none;
  margin: 0 10px;
`;

// Komponen utama untuk daftar film populer
const PopularList = () => {
  const [popularMovies, setPopularMovies] = useState([]); // State untuk menyimpan daftar film populer

  // Mengambil daftar film populer saat komponen pertama kali dirender
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  // Fungsi untuk menggulir slider ke kiri
  const scrollLeft = () => {
    document.getElementById('slider').scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Fungsi untuk menggulir slider ke kanan
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
              <MovieCard movie={movie} /> {/* Komponen untuk menampilkan kartu film */}
            </Slide>
          ))}
        </SliderContainer>
        <Arrow onClick={scrollRight}><FaCircleArrowRight /></Arrow> {/* Gunakan icon FaCircleArrowRight */}
      </div>
    </>
  );
};

export default PopularList;