import React, { useMemo } from 'react';

import Layout from '@components/Layout';

import { Link } from 'gatsby';
import Icon from '@ant-design/icons';
import Navbar from '@components/Navbar';
import * as config from '@config';
import FormattedIcon from '@components/icons/formatedIcons';


const IndexPage = () => {
  const currentDate = useMemo(() => {
    return new Date().getFullYear();
  }, [])
  return (
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
          <div className="w-100 flex">
            <article className="mb-0">
              <div>
                <h1 className="about-h blue-2 heading">About me</h1>
                <p className="lead mb-5 black">{config.aboutMe}</p>
              </div>
            </article>
            <article className="wd-100">
              <div>
                <h3 className="blue-2 mb-0">Core Technologies</h3>
                <ul className="ls-none m-0 p-0">
                  {config.coreSkills.map(skills => {
                    return (
                      <li className="black lead" key={skills.tech}>{skills.tech}</li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <h3 className="blue-2 mb-0">Others</h3>
                <ul className="ls-none m-0 p-0">
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
          <div className="w-100 flex">
            <div className="form-group">
              <article>
                <h2 className="contact blue-2 heading">Get in touch</h2>
                <p className="lead mb-5 black">{config.sayHi}</p>
              </article>
              <form
                action="https://formspree.io/mgeylaje"
                method="POST"
              >
                {config.formStrings.map(str => {
                  const { name, placeHolder, type, key } = str;
                  return (
                    <div key={key} style={{ display: 'inline-grid' }}>
                      {name === 'message' ?
                        <textarea className="form-field" key={key} type={type} name={name} placeholder={placeHolder} required />
                        : <input className="form-field" key={key} type={type} name={name} placeholder={placeHolder} required />
                      }

                    </div>
                  )
                })}
                <button className="">Send Message</button>
              </form>
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
                      <a aria-label={name} href={url} rel="nofollow noopener noreferer" target="_blank">
                        <FormattedIcon name={name} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </section>
        <footer className="resume-section text-c">
          <p className="lead">&copy; Segun Adebanjo <span className="lead">{currentDate}</span>. All rights reserved</p>
        </footer>
      </div>
    </Layout>
  )
};

export default IndexPage;
