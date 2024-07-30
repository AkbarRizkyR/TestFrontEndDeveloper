import { useState, useEffect } from "react";

import styled from "styled-components";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


const HeaderContainer = styled.header`

  display: flex;

  justify-content: space-between;

  align-items: center;
  padding: 15px 30px;

  background: url('./background.jpg') no-repeat center center;

  background-size: cover;

  position: fixed;

  top: 0;

  left: 0;

  right: 0;

  z-index: 1000;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease;


  @media (max-width: 768px) {
    padding: 10px 20px;

  }
`;


const Logo = styled.div`

  img {

    height: 40px;

    transition: all 0.3s ease;

  }

`;


const MenuButton = styled.button`

  display: none;

  background: none;

  border: none;

  color: #fff;

  font-size: 24px;

  cursor: pointer;


  @media (max-width: 768px) {

    display: block;

  }

`;


const Nav = styled.nav`

  @media (max-width: 768px) {

    position: fixed;

    top: 0;

    right: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "-100%")};
    width: 250px;

    height: 100vh;

    background-color: rgba(255, 255, 255, 0.95);

    padding: 80px 20px 20px;

    transition: right 0.3s ease;

    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

  }

`;


const NavList = styled.ul`

  display: flex;

  list-style: none;

  margin: 0;

  padding: 0;


  @media (max-width: 768px) {

    flex-direction: column;
  }
`;

const NavItem = styled.li`

  margin: 0 15px;


  @media (max-width: 768px) {

    margin: 15px 0;

  }


  a {

    color: #fff;

    font-weight: 500;

    font-size: 16px;

    text-decoration: none;

    transition: color 0.3s ease;


    &:hover {

      color: #007bff;

    }

  }

`;


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);


    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen);

    };


    useEffect(() => {
        const handleScroll = () => {

            setIsScrolled(window.scrollY > 50);

        };


        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HeaderContainer
            style={{
                backgroundColor: isScrolled

                    ? "rgba(0, 0, 0, 0.7)"

                    : "transparent",

            }}

        >

            <Logo>

                <img

                    src={"./vite.svg"}

                    alt="Logo"

                    style={{ filter: isScrolled ? "none" : "brightness(0) invert(1)" }}

                />

            </Logo>

            <MenuButton onClick={toggleMenu}>

                {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}

            </MenuButton>

            <Nav isMenuOpen={isMenuOpen.toString()}>

                <NavList>

                    <NavItem>

                        <a href="#beranda">Beranda</a>

                    </NavItem>

                    <NavItem>

                        <a href="#tentang-kami">Tentang Kami</a>

                    </NavItem>

                    <NavItem>

                        <a href="#unit-bisnis">Unit Bisnis</a>

                    </NavItem>

                    <NavItem>

                        <a href="#kontak">Kontak</a>

                    </NavItem>

                    <NavItem>

                        <a href="#karir">Karir</a>

                    </NavItem>

                </NavList>

            </Nav>

        </HeaderContainer>

    );

};

export default Header;