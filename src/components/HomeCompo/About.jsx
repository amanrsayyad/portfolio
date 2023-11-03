import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRight } from "../../utils/icon";

const About = () => {
  return (
    <AboutMain>
      <h2>
        A developer dedicated to developing evocative
        <span>digital experiences & advanced features</span>
      </h2>
      <div className="about_grid">
        <div>
          <p>
            Focus on your main goal of growing in my skill set, and handle
            accurately representing a brand with i am working in the digital
            world, setting it apart from the competition.
          </p>
          <Link to="/about" className="btn none flex-center">
            About Me <BsArrowRight className="icon" />
          </Link>
        </div>
        <div>
          <ul>
            <li>web app development</li>
            <li>custome software development</li>
            <li>mobile app development</li>
            <li>web design</li>
            <li>ui/ux</li>
          </ul>
          <Link to="/about" className="btn block flex-center">
            About Me <BsArrowRight className="icon" />
          </Link>
        </div>
      </div>
    </AboutMain>
  );
};

export default About;

const AboutMain = styled.div`
  padding: 4rem calc(-625px + 48vw) 1.5rem;
  padding-top: 5.5rem;

  h2 {
    font-size: 72px;
    font-weight: 600;
    letter-spacing: -4px;

    span {
      color: var(--grey);
      margin-left: 13px;
    }
  }
  .about_grid {
    display: grid;
    grid-template-columns: 2.8fr 1fr;
    grid-gap: 1rem;
    margin-top: 3.5rem;

    .btn {
      border-radius: 25px;
      padding: 15px 24px;
      border: 1px solid var(--black);
      font-weight: 500;
      color: var(--black);
      width: 17%;

      .icon {
        font-size: 20px;
        margin-left: 0.7rem;
      }

      &:hover {
        border: 1px solid var(--grey);
        color: var(--grey);
        transition: all 0.3s ease-in;

        .icon {
          transition: all 0.3s ease-in;
          color: var(--grey);
          transform: rotate(-45deg);
          font-weight: 600;
        }
      }
    }
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;
      width: 100%;
      color: var(--black-shade);
      margin-bottom: 2.8rem;
    }
    ul {
      text-align: right;
      list-style: none;
      width: 100%;

      li {
        color: var(--black-shade);
        margin-bottom: 2rem;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
  .block {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    margin: 0px 15px;

    .none {
      display: none;
    }
    .block {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2 {
      font-size: 50px;
      font-weight: 600;
    }
    .about_grid {
      grid-template-columns: 1fr;
      margin-top: 1.5rem;

      p {
        margin-bottom: 1rem;
      }
      .btn {
        width: 100%;
      }
      ul {
        text-align: left;
      }
    }
  }
`;
