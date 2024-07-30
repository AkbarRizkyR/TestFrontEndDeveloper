import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #343a40;
  padding: 20px;
  text-align: center;
  color: #fff;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 MyMovies. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
