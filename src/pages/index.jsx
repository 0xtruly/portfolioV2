import React, { useMemo } from 'react';

import Layout from '@components/Layout';

import { Link } from 'gatsby';
import Scrollspy from 'react-scrollspy';
import Scroll from '@components/Scroll';
import Navbar from '@components/Navbar';
import * as config from '@config';
import { FormattedIcon, ProjectIcon } from '@components/icons';
// import ProjectIcon from '../components/icons/projectIcon';

const IndexPage = () => {
  const currentDate = useMemo(() => {
    return new Date().getFullYear();
  }, []);
  return (
    <Layout>
      <Navbar />
      <div className="container-fluid p-0">
        <section className="resume-section" id="top">
          <div
            className="w-100 flex"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <article className="mb-0">
              <span className="salute offwhite">Hi, I'm</span>
              <h1 className="name heading">
                {config.firstName} {config.lastName},
              </h1>
              <h1 className="role heading">I {config.role}</h1>
              <p className="lead mb-5 offwhite">{config.about}</p>
              <Scrollspy offset={-300} className="cta-btn">
                <Scroll type="id" element="contact" className="cta-btn">
                  <a className="nav-link" href="#contact">
                    {config.cta}
                  </a>
                </Scroll>
              </Scrollspy>
            </article>
            <div className="about">
              <a className="about-link" href="https://github.com/Segun-Ade">
                <figure className="avatar">
                  <img src={config.avatar} alt="Segun Adebanjo" />
                </figure>
              </a>
            </div>
          </div>
        </section>

        <section className="resume-section" id="about">
          <div
            className="w-100 flex"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <article className="mb-0">
              <div>
                <h1 className="about-h heading">About me</h1>
                <p className="lead mb-5">{config.aboutMe}</p>
              </div>
            </article>
            <article className="wd-100">
              <div>
                <h3 className="white-2 mb-0">Core Technologies</h3>
                <ul className="ls-none m-0 p-0">
                  {config.coreSkills.map(skills => {
                    return (
                      <li className="lead" key={skills.tech}>
                        {skills.tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h3 className="white-2 mb-0">Others</h3>
                <ul className="ls-none m-0 p-0">
                  {config.otherSkills.map(skills => {
                    return (
                      <li className="lead" key={skills.tech}>
                        {skills.tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="resume-section" id="projects">
          <div className="w-100">
            <h2 className="projects heading">Recent Projects</h2>

            {config.projects.map(project => {
              const { details, github, index, name, src, url, tools } = project;
              return (
                <div
                  className="flex-card"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="featured content">
                    <h4>Featured Project</h4>
                    <h5>
                      <a
                        aria-label="External Link"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    </h5>

                    <div className="featured details">
                      <p>{details}</p>
                    </div>
                    <ul>
                      {tools.map(tool => (
                        <li>{tool}</li>
                      ))}
                    </ul>
                    <div className="project links">
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <ProjectIcon name="GitHub" />
                        </a>
                      )}
                      {url && (
                        <a
                          href={url}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <ProjectIcon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                  <a key={name} href={url} className="image-link">
                    <div className="card">
                      <img className={'numb_'} src={src} alt={name} />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        <section className="resume-section" id="contact">
          <div className="w-100 flex">
            <div className="form-group">
              <article>
                <h2 className="contact blue-2 heading">Get in touch</h2>
                <p className="lead mb-5">{config.sayHi}</p>
              </article>
              {/* <form action="https://formspree.io/mgeylaje" method="POST">
                {config.formStrings.map(str => {
                  const { name, placeHolder, type, key } = str;
                  return (
                    <div key={key} style={{ display: 'inline-grid' }}>
                      {name === 'message' ? (
                        <textarea
                          className="form-field"
                          key={key}
                          type={type}
                          name={name}
                          placeholder={placeHolder}
                          required
                        />
                      ) : (
                        <input
                          className="form-field"
                          key={key}
                          type={type}
                          name={name}
                          placeholder={placeHolder}
                          required
                        />
                      )}
                    </div>
                  );
                })}
                <button className="">Send Message</button>
              </form> */}
            </div>
            <aside className="socials bg-navy-blue">
              <article>
                <h2 className="heading">Let's connect</h2>
                <p className="lead">Connect with me on social media</p>
              </article>
              <ul className="social-group ls-none">
                {config.socialLinks.map(({ name, url }, i) => {
                  return (
                    <li key={i}>
                      <a
                        aria-label={name}
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FormattedIcon name={name} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </section>
        <footer className="resume-section text-c bg-navy-blue">
          <p className="lead">
            &copy; Segun Adebanjo <span className="lead">{currentDate}</span>.
            All rights reserved
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default IndexPage;
