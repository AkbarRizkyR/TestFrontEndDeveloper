import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { getPeople } from '../api/api'; // Asumsi API ini ada
import PersonCard from './PersonCard'; // Import PersonCard
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

const People = () => {
    const [people, setPeople] = useState([]); // State untuk menyimpan data people
    const [loading, setLoading] = useState(true); // State untuk loading
    const [error, setError] = useState(null); // State untuk error
    const sliderRef = useRef(null); // Tambahkan useRef untuk referensi slider

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const data = await getPeople(); // Panggil API untuk mendapatkan data people
                setPeople(data); // Set data people ke state
            } catch (err) {
                setError(err.message); // Set error jika ada
            } finally {
                setLoading(false); // Set loading ke false setelah data diambil
            }
        };
        fetchPeople(); // Panggil fungsi fetchPeople saat komponen mount
    }, []);

    // Fungsi untuk scroll ke kiri
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    // Fungsi untuk scroll ke kanan
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    if (loading) return <p>Loading...</p>; // Tampilkan loading jika data sedang diambil
    if (error) return <p>Error: {error}</p>; // Tampilkan error jika ada

    return (
        <>
            <Title>Featured Casts</Title> {/* Judul */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Arrow onClick={scrollLeft}><FaCircleArrowLeft /></Arrow> {/* Gunakan icon FaCircleArrowLeft */}
                <SliderContainer ref={sliderRef}> {/* Gunakan ref untuk slider */}
                    {people.map(person => (
                        <Slide key={person.id}>
                            <PersonCard person={person} /> {/* Tampilkan PersonCard untuk setiap person */}
                        </Slide>
                    ))}
                </SliderContainer>
                <Arrow onClick={scrollRight}><FaCircleArrowRight /></Arrow> {/* Gunakan icon FaCircleArrowRight */}
            </div>
        </>
    );
};

export default People;