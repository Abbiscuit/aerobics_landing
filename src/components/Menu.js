import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Container>
      <InnerContainer>
        <MenuItem>New Arrivals</MenuItem>
        <MenuItem>Women</MenuItem>
        <MenuItem>Men</MenuItem>
        <MenuItem>Tops</MenuItem>
        <MenuItem>Bottoms</MenuItem>
        <MenuItem>Outerwear</MenuItem>
        <MenuItem>Swim</MenuItem>
        <MenuItem>Footwear</MenuItem>
        <MenuItem>Sale</MenuItem>
      </InnerContainer>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #fafafa;
  padding: 0 265px;
  margin-bottom: 46px;
`;

const InnerContainer = styled.div`
  width: 910px;
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
