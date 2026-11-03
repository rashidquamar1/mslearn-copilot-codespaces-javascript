/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section page-section" id="portfolio">
      <div className="page-shell">
        <div className="portfolio-heading">
          <p className="section-kicker">02 / Selected work</p>
          <h2>A few things I&apos;ve been part of.</h2>
        </div>
        <div className="portfolio-layout">
          <div className="portfolio-list">
            {projectList.map((project, index) => (
              <a
                className="project-link"
                href={project.url}
                key={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="project-index">0{index + 1}</span>
                <span className="project-copy">
                  <h3>{project.title}</h3>
                  <span className="project-description">{project.description}</span>
                </span>
                <span className="project-arrow" aria-hidden="true">&#8599;</span>
              </a>
            ))}
          </div>
          <figure className="portfolio-figure">
            <img src={image} alt={imageAltText} />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
