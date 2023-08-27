import React, { Component } from 'react';

class Menubar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar bg-dark'>
          <div className="container">
            <h1 className='logo lg-heading text-light'>WT</h1>
            <ul className='nav-items'>
              <li className="nav-item"><a href="./">Home</a></li>
              <li className="nav-item"><a href="./about">About</a></li>
              <li className="nav-item"><a href="./contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menubar;