import React from 'react';
import styled from 'styled-components';

const HeaderLogoBar = () => {
  return (
    <Container>
      <Text>Fitma</Text>
    </Container>
  );
};

export default HeaderLogoBar;

const Container = styled.div`
  background-color: #fafafa;
  margin-bottom: 40px;
`;

const Text = styled.h1`
  color: #222;
  font-size: 32px;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
  padding: 30px 0 23px;
`;
