import React from 'react';
import Banner from '../Banner';
import HeaderLogoBar from '../HeaderLogoBar';
import Menu from '../Menu';

const Frame = ({ children, message }) => {
  return (
    <React.Fragment>
      <Banner message={message} />
      <HeaderLogoBar />
      <Menu />
      {children}
    </React.Fragment>
  );
};

export default Frame;
