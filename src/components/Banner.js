import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = ({ message }) => {
  return (
    <BannerContainer className="notification">
      <Text className="notification__message">
        {message} -{' '}
        <strong>
          <LinkText to="/">こちらをクリック</LinkText>
        </strong>
      </Text>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  margin-bottom: 40px;
  background-color: #50458c;
`;

const Text = styled.p`
  color: #fafafa;
  text-align: center;
  padding: 10px 0;
`;

const LinkText = styled(Link)`
  color: #fafafa;
  text-decoration: underline;
`;
