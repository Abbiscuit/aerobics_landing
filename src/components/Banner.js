import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <BannerContainer className="notification">
      <Text className="notification__message">
        Some banner about a promotion for a discount -{' '}
        <strong>Click here</strong>
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
