import React from 'react';

import './custom-button.component.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    type='submit'
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
