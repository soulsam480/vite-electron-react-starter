import React from 'react';
import { Link } from 'react-router-dom';

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1em',
  justifyContent: 'center',
};

const AppNavigation: React.FC = () => {
  return (
    <nav style={navStyle}>
      <Link to='/'>
        Home
      </Link>
      <span> | </span>
      <Link to='/about'>
        About
      </Link>
    </nav>
  );
};

export default AppNavigation;
