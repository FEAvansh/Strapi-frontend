import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner_1 from "../Banner_1";
import "./technology.css";
export default function Technology() {
  const [navBar, setNavbar] = useState(false);
  return (
    <>
      {navBar ? (
        <>
          <div class="header_right">
            <span onClick={() => setNavbar(false)}>x</span>
            <ul>
              <li>HOME</li>
              <li>COMPANY</li>
              <li>SERVICES</li>
              <li>HIRE DEVELOPER TEAM</li>
              <li>TECHNOLOGY</li>
              <li>CASE STUDIES</li>
            </ul>
          </div>
        </>
      ) : (
        <nav className="navbar navbar-expand-lg ">
          <Link className="navbar-brand" to="/">
            <img className="navbar-brand-logo" src="img/logo.svg" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  COMPANY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  HIRE DEVELOPER TEAM
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  TECHNOLOGY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  CASE STUDIES
                </a>
              </li>
            </ul>
            <button className="navbarButton">Contact Us</button>
          </div>
          <img
            onClick={() => setNavbar(true)}
            className="listicon"
            src="img/list.svg"
          />
        </nav>
      )}
      <section className="sectiona">
        <h1>
          We Work on <br />
          <strong>Advance Technologies</strong>
        </h1>
        <p>
          Solving business problems is in our DNA. And Frontend Army has the
          technical expertise to make this happen. You have the idea and we have
          just the right resources with rich industry experience that your
          software development project needs.
        </p>
      </section>
      <section className="sectionb">
        <h1>
          Strategy We Employ<span> </span>
          <strong>In Your Project</strong>
        </h1>
        <div class="sectionbCard">
          <div class="row">
            <div class="col">
              <h1>Discover</h1>
              <p>
                We shape brands through exploration, applying in-depth research
                to challenge assumptions at every turn.
              </p>
            </div>
            <div class="col downcard">
              <h1>Design</h1>
              <p>
                Our design approach is to simplify. We embrace the joy of
                creating something unique that is easy for end-users.
              </p>
            </div>
            <div class="col">
              <h1>Build</h1>
              <p>
                Using modern technologies, we build with efficiency and skill,
                creating flexible and scalable business-driven solutions.
              </p>
            </div>
            <div class="col downcard">
              <h1>Deliver</h1>
              <p>
                We take an iterative approach to both our work and our practice,
                always looking for ways to improve what we do.
              </p>
            </div>
          </div>
        </div>
        <Banner_1 />
      </section>
      <section className="sectionc">
        <h1>
          Let’s co-create your <strong> Success Story</strong>
          <button className="navbarButton">let’s talk</button>
        </h1>
      </section>
      <footer className="footer  ">
        <div className="container">
          <div class="row  footerbar">
            <div class="col footerlist">
              <img
                className="navbar-brand-logo footer-content"
                src="img/logo1.svg"
              />
              <br />
              Get Free Estimation <br />
              <a href="mailto:info@frontendarmy.com">info@frontendarmy.com</a>
              <br />
              India
              <br /> 804, Fortune Business Hub, Ahmedabad, Gujarat. 380060{" "}
              <br />
              PH: +91 79-46006836
            </div>
            <div class="col footerlist">
              <h1>Company</h1>
              <ul>
                <li>About us</li>
                <li>Careers</li>
              </ul>
            </div>
            <div class="col footerlist">
              <h1>Service</h1>
              <ul>
                <li>Design</li>
                <li>Web Development</li>
                <li>CMS Development</li>
                <li>Mobile Development</li>
                <li>DevOps</li>
              </ul>
            </div>
            <div class="col footerlist">
              <h1>Technology</h1>
              <ul>
                <li>Mobile</li>
                <li>Frontend</li>
                <li>Backend</li>
                <li>CMS</li>
                <li>Database</li>
                <li>Infra and DevOps</li>
              </ul>
            </div>
            <div class="col footerlist">
              <h1>Hire Developer Team</h1>
              <h1>Case Studies</h1>
            </div>
          </div>
        </div>
        <hr />

        <p className="footerCopy">
          (C) 2022, FrontendArmy Infocon Private Limited.
        </p>
      </footer>
      
    </>
  );
}
