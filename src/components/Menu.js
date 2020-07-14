import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Container>
      <InnerContainer>
        <MenuItem to="/">New Arrivals</MenuItem>
        <MenuItem to="/">Women</MenuItem>
        <MenuItem to="/">Men</MenuItem>
        <MenuItem to="/">Tops</MenuItem>
        <MenuItem to="/">Bottoms</MenuItem>
        <MenuItem to="/">Outerwear</MenuItem>
        <MenuItem to="/">Swim</MenuItem>
        <MenuItem to="/">Footwear</MenuItem>
        <MenuItem to="/">Sale</MenuItem>
      </InnerContainer>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #fafafa;
  padding: 0 265px;
  margin-bottom: 46px;
`;

const InnerContainer = styled.div`
  max-width: 910px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const MenuItem = styled(Link)`
  color: #222;
  display: inline-block;
  font-size: 16px;
  padding: 12px;
`;
