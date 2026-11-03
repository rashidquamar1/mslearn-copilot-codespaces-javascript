/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <header className="site-header">
      <a className="site-brand" href="#home" aria-label="Alexandrie Grenier, back to top">
        <span className="brand-mark" aria-hidden="true">AG</span>
        <span className="brand-copy">
          <span>Alexandrie Grenier</span>
          <small>Web design &amp; content</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#footer">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
