import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle to="/">FITMA</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  height: 60px;
  background-color: #465e8a;
`;

const HeaderTitle = styled(Link)`
  color: #fff;
`;
