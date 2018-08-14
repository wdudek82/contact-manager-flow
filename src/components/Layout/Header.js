// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  branding?: string,
};

const Header = (props: Props) => {
  const { branding } = props;

  return (
    <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                <FontAwesomeIcon icon="home" />{' '}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                <FontAwesomeIcon icon="question" />{' '}
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact/add" className="nav-link">
                <FontAwesomeIcon icon="plus" />{' '}
                Add Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App',
};

export default Header;
