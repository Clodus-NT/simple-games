import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <a className='navTitle' href='/'>Simple Games</a>
      <ul>
        <li>
          <a href='/rock-paper-scissors'>Rock-Paper-Scissors</a>
        </li>
        <li>
          <a href='/memory-match'>Memory Match</a>
        </li>
        <li>
          <a href='/whac-a-mole'>Whac-A-Mole</a>
        </li>
        <li>
          <a href='/breakout'>Breakout</a>
        </li>
        <li>
          <a href='/frogger'>Frogger</a>
        </li>
        <li>
          <a href='/connect-four'>Connect Four</a>
        </li>
        <li>
          <a href='/space-invaders'>Space Invaders</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;