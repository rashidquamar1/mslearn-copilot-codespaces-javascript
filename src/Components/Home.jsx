/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/woman-with-tablet.jpg";

const imageAltText = "Designer standing beside a glass wall in a bright office.";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="hero-section">
      <img className="hero-image" src={image} alt={imageAltText} />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-eyebrow">
          <span className="hero-dot" aria-hidden="true" />
          Digital design &amp; storytelling
        </p>
        <h1>{name}</h1>
        <p className="hero-title">{title}</p>
        <a className="hero-cta" href="#portfolio">
          <span>View selected work</span>
          <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
      <a className="hero-scroll" href="#about">
        <span>Scroll to discover</span>
        <img src={arrowSvg} alt="" aria-hidden="true" />
      </a>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
