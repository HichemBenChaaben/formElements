import React from 'react';
import './buttons.css';

const Button = ({ props, label, disabled, className }) => (
  <button {...arguments.children} className={className} disabled={disabled}>{ label }</button>
);

export default Button;