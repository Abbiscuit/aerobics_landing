import React from 'react';
import styled from 'styled-components';

const CardCollection = () => {
  return (
    <CardList>
      <Card>
        <CardImage
          src="https://images.unsplash.com/photo-1554245064-3ab88761ac5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <CardSubText>desc</CardSubText>
      </Card>
      <Card>
        <CardImage
          src="https://images.unsplash.com/photo-1551855144-315149938d84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <CardSubText>desc</CardSubText>
      </Card>
      <Card>
        <CardImage
          src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <CardSubText>desc</CardSubText>
      </Card>
    </CardList>
  );
};

export default CardCollection;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 60px;
`;

const Card = styled.div`
  width: 400px;
  margin: 0 24px;
  text-align: center;
`;

const CardSubText = styled.p`
  font-size: 24px;
  color: #465e8a;
`;

const CardImage = styled.img`
  margin-bottom: 24px;
`;
