import React from 'react';
import styled from 'styled-components';
import PopularList from "./components/PopularList";
import Footer from "./components/Footer";
import Banner from './components/Banner';
import People from './components/People';

// Container utama untuk aplikasi
const AppContainer = styled.div`
  // Tambahkan styling di sini jika diperlukan
`;

// Komponen utama aplikasi
const App = () => {
  return (
    <>
      <AppContainer>
        {/* Komponen Banner untuk menampilkan banner */}
        <Banner />
        {/* Komponen PopularList untuk menampilkan daftar populer */}
        <PopularList />
        {/* Komponen People untuk menampilkan daftar orang */}
        <People />
      </AppContainer>
      {/* Komponen Footer untuk menampilkan footer */}
      <Footer />
    </>
  );
};

export default App;