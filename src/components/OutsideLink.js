import React from 'react';
import styled from 'styled-components';

const OutsideLink = ({ children, href, center, shadow, top, bottom }) => {
  return (
    <Container
      center={center}
      shadow={shadow}
      href={href}
      top={top}
      bottom={bottom}
    >
      <ButtonLink>{children}</ButtonLink>
    </Container>
  );
};

export default OutsideLink;

const Container = styled.a`
  margin: ${props => (props.center ? '0 auto' : 'none')};
  margin-top: ${props => `${props.top}px` || '0px'};
  margin-bottom: ${props => props.bottom || '0px'};
  background-color: #0d88bc;
  max-width: 234px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props =>
    props.shadow ? '0 4px 4px rgba(0, 0, 0, 0.1);' : 'none'};
  box-shadow: ${props =>
    props.shadow ? '0 16px 40px rgba(0, 0, 0, 0.4);' : 'none'};

  &:hover {
    background-color: rgba(13, 136, 150);
  }
`;

const ButtonLink = styled.p`
  color: #fafafa;
`;
