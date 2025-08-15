import React, {useContext} from "react";
import "./About.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {aboutSection} from "../../portfolio";

export default function About() {
  const {isDark} = useContext(StyleContext);
  if (!aboutSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="about">
        <div className="about-main-div">
          <div className="about-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading about-heading"
                  : "heading about-heading"
              }
            >
              {aboutSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle about-subtitle"
                  : "subTitle about-subtitle"
              }
            >
              {aboutSection.subtitle}
            </p>
          </div>
          <div className="about-content-div">
            <div className="about-text-div">
              <div className="about-details">
                {aboutSection.paragraphs.map((paragraph, i) => {
                  return (
                    <p
                      key={i}
                      className={
                        isDark
                          ? "dark-mode about-text-p"
                          : "about-text-p subTitle"
                      }
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
              <div className="about-info-grid">
                {aboutSection.personalInfo && (
                  <div className="personal-info">
                    <h3 className={isDark ? "dark-mode info-title" : "info-title"}>
                      Personal Info
                    </h3>
                    {aboutSection.personalInfo.map((info, i) => (
                      <div key={i} className="info-item">
                        <span className="info-label">{info.label}:</span>
                        <span className={isDark ? "dark-mode info-value" : "info-value"}>
                          {info.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="about-image-div">
              <img
                src={require(`../../assets/images/profile_portfolio.jpg`)}
                alt="Prithwish Profile"
                className="about-profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
