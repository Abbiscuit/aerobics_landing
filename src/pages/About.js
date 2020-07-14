import React from 'react';
import Frame from '../components/layouts/Frame';
import styled from 'styled-components';

const message = '最大50%オフ！！どんどんカートへ追加しよう！';

const About = () => (
  <Frame message={message}>
    <h1>About</h1>
  </Frame>
);

export default About;
