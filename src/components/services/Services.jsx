import React from "react";
import "./services.scss";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>User Research</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>User Interface Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Prototyping</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Information Architecture</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX Article */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Front-End Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Back-End Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Database Design and Management</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Server Configuration and Deployment</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>User Authentication and Authorization</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>API Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Version Control and Collaboration</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Third-Party Integrations</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development Article */}

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Blog Posts and Articles</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Website Content</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Social Media Content</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Copywriting</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Video Scripts and Storyboards</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Podcast Scripting</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Content Editing and Proofreading</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>SEO Content</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation Article */}
      </div>
    </section>
  );
};

export default Services;
