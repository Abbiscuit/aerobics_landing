import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import CardCollection from '../components/CardCollection';
import Footer from '../components/Footer';
import Frame from '../components/layouts/Frame';

const Home = ({ message }) => {
  return (
    <Frame message={message}>
      <Container>
        <HeroCoverContainer>
          <InnerContainer>
            <Title>Title Tagline and Stuff</Title>
            <Text>
              Subtitle details and product description about image or product
            </Text>
            <Button to="/about" shadow>
              商品一覧へ
            </Button>
          </InnerContainer>
        </HeroCoverContainer>
        <CardsContainer>
          <CardText>Popular Categories</CardText>
          <CardCollection />
          <Button center>カテゴリ一覧</Button>
        </CardsContainer>
        <CardsContainer white>
          <CardText>New Arraivals</CardText>
          <CardCollection />
        </CardsContainer>
        <CardsContainer dark>
          <CardText white>Popular Categories</CardText>
          <CardCollection />
          <Button center>View all categories</Button>
        </CardsContainer>
        <Footer />
      </Container>
    </Frame>
  );
};

export default Home;

const Container = styled.div`
  /* background-color: salmon; */
`;

const HeroCoverContainer = styled.div`
  height: 640px;
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-image: url('https://images.unsplash.com/photo-1579722820903-01d3e776f85e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=800&q=60');
  background-size: cover;
  background-position: center;
`;

const InnerContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 36px;
  color: #fafafa;
`;

const Text = styled.p`
  font-size: 24;
  margin-bottom: 44px;
  color: #fafafa;
`;

const CardsContainer = styled.div`
  /* height: 640px; */
  width: 100%;
  padding: 104px 96px;
  margin-bottom: 40px;
  background-color: ${props => {
    if (props.white) {
      return '#fff';
    } else if (props.dark) {
      return '#2A2D34';
    } else {
      return '#fafafa';
    }
  }};
`;

const CardText = styled.h3`
  text-transform: uppercase;
  color: ${props => (props.white ? '#fafafa' : '#465e8a')};
  text-align: center;
  font-weight: normal;
  margin-bottom: 48px;
`;
