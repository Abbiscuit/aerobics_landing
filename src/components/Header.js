import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle to="/">FITMA</HeaderTitle>
      {/* <HeaderLogin to="/admin">Login</HeaderLogin> */}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  height: 60px;
  background-color: #465e8a;
`;

const HeaderTitle = styled(Link)`
  color: #fff;
`;

// const HeaderLogin = styled(Link)`
//   color: #fff;
// `;
