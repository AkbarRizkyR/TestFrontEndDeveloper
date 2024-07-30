import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getMovieList } from "../api/api";
import imdbLogo from '../assets/icons/imdb.svg';

// Komponen styled untuk membungkus banner
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

// Komponen styled untuk overlay
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

// Komponen styled untuk konten
const Content = styled.div`
  max-width: 50%;
  margin-left: 5rem;
  padding: 1.5rem;
  text-align: left;
`;

// Komponen styled untuk judul
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

// Komponen styled untuk deskripsi
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

// Komponen styled untuk kontainer tombol
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

// Komponen styled untuk kontainer rating
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

// Komponen styled untuk logo IMDb
const IMDbLogo = styled.img`
  height: 20px;
  margin-right: 10px;
`;

// Komponen styled untuk rating
const Rating = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #ffd700;
`;

// Komponen utama Banner
const Banner = () => {
    const [movies, setMovies] = useState([]); // State untuk menyimpan daftar film
    const [currentIndex, setCurrentIndex] = useState(0); // State untuk menyimpan indeks film saat ini

    // Mengambil daftar film dari API saat komponen pertama kali dimuat
    useEffect(() => {
        const fetchMovies = async () => {
            const movieList = await getMovieList();
            setMovies(movieList.slice(0, 5)); // Menyimpan 5 film pertama
        };
        fetchMovies();
    }, []);

    // Mengatur interval untuk mengganti film setiap 5 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        }, 5000);
        return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
    }, [movies]);

    const currentMovie = movies[currentIndex]; // Mendapatkan film saat ini berdasarkan indeks

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