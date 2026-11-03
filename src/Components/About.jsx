/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a UI/UX student studying at Barnett Technical University. I enjoy creating unique and simplistic user interfaces in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="about-section page-section" id="about">
      <div className="page-shell about-layout">
        <div className="about-lead">
          <p className="section-kicker">01 / About</p>
          <h2>Curiosity, shaped into <em>clarity.</em></h2>
        </div>
        <div className="about-content">
          <p className="about-intro">{description}</p>
          <p className="about-detail">{detailOrQuote}</p>
          <div className="skill-block">
            <p className="section-kicker">Areas of interest</p>
            <ul className="skill-list">
              {skillsList.map((skill, index) => (
                <li key={skill}>
                  <span className="skill-index">0{index + 1}</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
