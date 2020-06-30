import React from 'react';
import './Button.scss';

const Button = ({ onClick }) => (
  <button type="button" className="Button" onClick={onClick}>
    Load more
  </button>
);

export default Button;
