import React from 'react';
import styled from 'styled-components';
import PopularList from "./components/PopularList";
import Footer from "./components/Footer";
import Banner from './components/Banner';
import People from './components/People';

const AppContainer = styled.div`
  
`;

const App = () => {
  return (
    <>
      <AppContainer>
        <Banner />
        <PopularList />
        <People />
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;