import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { getPeople } from '../api/api'; // Asumsi API ini ada
import PersonCard from './PersonCard'; // Import PersonCard
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

const People = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const sliderRef = useRef(null); // Tambahkan useRef

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const data = await getPeople();
                setPeople(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPeople();
    }, []);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Title>Featured Casts</Title>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Arrow onClick={scrollLeft}><FaCircleArrowLeft /></Arrow> {/* Gunakan icon FaCircleArrowLeft */}
                <SliderContainer ref={sliderRef}> {/* Gunakan ref */}
                    {people.map(person => (
                        <Slide key={person.id}>
                            <PersonCard person={person} />
                        </Slide>
                    ))}
                </SliderContainer>
                <Arrow onClick={scrollRight}><FaCircleArrowRight /></Arrow> {/* Gunakan icon FaCircleArrowRight */}
            </div>
        </>
    );
};

export default People;