import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Navbar from '../components/Navbar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Navbar />
    <div className="container-fluid p-0">
      <section
        className="resume-section"
        id="top"
      >
        <div className="w-100 flex" data-aos="fade-up"
          data-aos-duration="3000">
          <article className="mb-0">
            <span className="salute offwhite">Hi, I'm</span>
            <h1 className="name heading">{config.firstName} {config.lastName},</h1>
            <h1 className="role heading">I {config.role}</h1>
            <p className="lead mb-5 offwhite">
              {config.about}
            </p>
            <button className="cta-btn">{config.cta}</button>
          </article>
          <div className="about">
            <a className="about-link" href="https://github.com/Segun-Ade">
              <figure className="avatar">
                <img src={config.avatar} alt="avatar" />
              </figure>
            </a>
          </div>
          {/* <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div> */}
        </div>
      </section>

      <section
        className="resume-section white-bg"
        id="about"
      >
        <div className="w-100 flex bg-white">
          <article className="mb-0">
            <div>
              <h1 className="about-h blue-2 heading">About me</h1>
              <p className="lead mb-5 black">{config.aboutMe}</p>
            </div>
          </article>
          <article className="wd-100">
            <div>
              <h3 className="blue-2">Core Technologies</h3>
              <ul className="list-n">
                {config.coreSkills.map(skills => {
                  return (
                    <li className="black lead" key={skills.tech}>{skills.tech}</li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h3 className="blue-2">Others</h3>
              <ul className="list-n">
                {config.otherSkills.map(skills => {
                  return (
                    <li className="black lead" key={skills.tech}>{skills.tech}</li>
                  )
                })}
              </ul>
            </div>
          </article>
        </div>
      </section>


      <section
        className="resume-section"
        id="projects"
      >
        <div className="w-100">
          <h2 className="projects heading">Recent Projects</h2>

          <div className="flex-card">
            {config.projects.map(project => {
              const { github, index, name, url, } = project;
              return (
                <a key={name} href={url}>
                  <div className={'card' + ' ' + 'numb_' + index}></div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="resume-section white-bg"
        id="awards"
      >
        <div className="w-100 bg-white">
          <div>
            <article>
              <h2 className="contact blue-2 heading">Get in touch</h2>
              <p className="lead mb-5 black">{config.sayHi}</p>
            </article>
            <form
              action="https://formspree.io/mgeylaje"
              method="POST"
            >
              {config.formStrings.map(str => {
                const { name, placeHolder, type } = str;
                return (
                  <>
                    <input className="a1" key={name} type={type} name={name} placeholder={placeHolder} />
                  </>
                )
              })}
              <button className="">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
