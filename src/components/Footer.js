import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <FooterCategories>
          <FooterCategoryMenu>
            <FooterCategoryText large>Fitma</FooterCategoryText>
            <FooterCategoryList>
              <FooterCategoryItem>Instagram</FooterCategoryItem>
              <FooterCategoryItem>Twitter</FooterCategoryItem>
              <FooterCategoryItem>Facebook</FooterCategoryItem>
              <FooterCategoryItem>Pinterest</FooterCategoryItem>
            </FooterCategoryList>
          </FooterCategoryMenu>
          <FooterCategoryMenu className="footer-menu">
            <FooterCategoryText bold>Fitma</FooterCategoryText>
            <FooterCategoryList>
              <FooterCategoryItem>Instagram</FooterCategoryItem>
              <FooterCategoryItem>Twitter</FooterCategoryItem>
              <FooterCategoryItem>Facebook</FooterCategoryItem>
              <FooterCategoryItem>Pinterest</FooterCategoryItem>
            </FooterCategoryList>
          </FooterCategoryMenu>
          <FooterCategoryMenu className="footer-menu">
            <FooterCategoryText bold>Fitma</FooterCategoryText>
            <FooterCategoryList>
              <FooterCategoryItem>Instagram</FooterCategoryItem>
              <FooterCategoryItem>Twitter</FooterCategoryItem>
              <FooterCategoryItem>Facebook</FooterCategoryItem>
              <FooterCategoryItem>Pinterest</FooterCategoryItem>
            </FooterCategoryList>
          </FooterCategoryMenu>
          <FooterCategoryMenu className="footer-menu">
            <FooterCategoryText bold>Fitma</FooterCategoryText>
            <FooterCategoryList>
              <FooterCategoryItem>Instagram</FooterCategoryItem>
              <FooterCategoryItem>Twitter</FooterCategoryItem>
              <FooterCategoryItem>Facebook</FooterCategoryItem>
              <FooterCategoryItem>Pinterest</FooterCategoryItem>
            </FooterCategoryList>
          </FooterCategoryMenu>
        </FooterCategories>
        <FooterLinks>
          <FooterList>
            <FooterItem>Instagram</FooterItem>
            <FooterItem>Twitter</FooterItem>
            <FooterItem>Facebook</FooterItem>
            <FooterItem>Pinterest</FooterItem>
          </FooterList>
        </FooterLinks>
      </InnerContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  height: 514px;
  background-color: ${props => (props.dark ? '2A2D34' : '#fafafa')};
  display: flex;
  align-items: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const FooterCategories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 790px;
  margin-bottom: 64px;
`;

const FooterCategoryMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 218px;
  width: 91px;
`;

const FooterCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const FooterCategoryText = styled.p`
  font-size: ${props => props.large && '36px'};
  font-weight: ${props => props.bold && 'bold'};
  margin-bottom: ${props => props.bold && '32px'};
`;

const FooterCategoryItem = styled.li``;

const FooterLinks = styled.div`
  max-width: 500px;
  width: 100%;
`;

const FooterList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FooterItem = styled.li``;
