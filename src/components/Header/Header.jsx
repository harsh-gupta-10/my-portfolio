import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    return (
      <nav className="bg-gray-800 p-4 text-xl font-mono" style={{ zIndex: 1000 }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
        <Link to="/">MyPortfolio</Link>
        </div>

        <div className="block lg:hidden">
        <button
          onClick={this.toggleMenu}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
          </svg>
        </button>
        </div>
        <ul
        className={`${
          this.state.isMenuOpen ? 'block' : 'hidden'
        } lg:flex lg:space-x-4`}
        >
        <li>
          <Link className="text-gray-300 hover:text-white" to="/">
          Home
          </Link>
        </li>
        <li>
          <Link className="text-gray-300 hover:text-white" to="/about">
          About
          </Link>
        </li>
        <li>
          <Link className="text-gray-300 hover:text-white" to="/contact">
          Contact
          </Link>
        </li>
        <li>
          <Link className="text-gray-300 hover:text-white" to="/projects">
          Projects
          </Link>
        </li>
        {/* <li>
          <Link className="text-gray-300 hover:text-white" to="/products">
          Products
          </Link>
        </li> */}
        </ul>
      </div>
      </nav>
    );
  }
}

export default Header;