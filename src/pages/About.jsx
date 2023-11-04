import React, { useEffect } from "react";
import styled from "styled-components";
import { BsArrowDown } from "../utils/icon";
import {
  profile,
  htmlIco,
  cssIco,
  jsIco,
  reactIco,
  nodeIco,
  mongodbIco,
} from "../utils/images";

const About = () => {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutMain>
      <h4>About Me</h4>
      <div className="grid">
        <div className="card">
          <h1>
            Innovative coder within a <span>digital age</span>
          </h1>
        </div>
        <div className="card">
          <p>
            I'm Aman Sayyad, a Full Stack Developer located in India, focusing
            on developing digital experiences that are user-friendly,
            delightful, and accomplish their goals.
          </p>
          <div onClick={handleScroll} className="social_btn flex-center">
            Social media <BsArrowDown className="icon" />
          </div>
        </div>
      </div>
      <div className="grid_exp">
        <img src={profile} alt="" />
        <div className="experience">
          <h3>My Experience</h3>
          <ul>
            <li className="space-between">
              <div>
                <h4>Frontend Developer</h4>
                <h5>Nmskaar Infotech</h5>
              </div>
              <div>
                <p>Aug 2022 - Oct 2023</p>
              </div>
            </li>
            <li className="space-between">
              <div>
                <h4>Full Stack Developer</h4>
                <h5>Stylopedia Technology</h5>
              </div>
              <div>
                <p>Aug 2021 - Aug 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="stack_main">
        <h3>Stack</h3>
        <div className="stack_grid">
          <div className="card">
            <div>
              <img src={mongodbIco} alt="" />
            </div>
            <div className="data">
              <h4>MONGODB</h4>
              <p>create dynamic content for websites</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={nodeIco} alt="" />
            </div>
            <div className="data">
              <h4>NODE JS + EXPRESS JS</h4>
              <p>server-side proxy, application framework</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={reactIco} alt="" />
            </div>
            <div className="data">
              <h4>REACT</h4>
              <p>Web and native user interfaces</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={jsIco} alt="" />
            </div>
            <div className="data">
              <h4>JS</h4>
              <p>Dynamic content for websites</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={cssIco} alt="" />
            </div>
            <div className="data">
              <h4>CSS 3</h4>
              <p>Visual Styling</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={htmlIco} alt="" />
            </div>
            <div className="data">
              <h4>HTML 5</h4>
              <p>Structure and Content</p>
            </div>
          </div>
        </div>
      </div>
    </AboutMain>
  );
};

export default About;

const AboutMain = styled.div`
  padding: 4rem calc(-625px + 48vw) 1.5rem;

  h4 {
    font-size: 22px;
    font-weight: 500;
  }
  .stack_main {
    margin-top: 6rem;
    h3 {
      font-size: 40px;
      font-weight: 600;
      letter-spacing: -1px;
    }
    .stack_grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
      margin-top: 1.5rem;

      .card {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: rgb(250, 250, 250);
        padding: 24px;

        img {
          width: 45px;
          height: 45px;
        }
        .data {
          margin-left: 15px;

          h4 {
            font-weight: 600;
            margin-bottom: 0.1rem;
          }
          p {
            color: rgb(102, 102, 102);
          }
        }
      }
      @media only screen and (max-width: 991px) {
        grid-template-columns: 1fr;
      }
    }
  }
  .grid_exp {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-top: 6rem;
    img {
      width: 600px;
      height: 600px;
      border-radius: 30px;
    }
    .experience {
      h3 {
        font-size: 40px;
        font-weight: 600;
        letter-spacing: -1px;
        padding-bottom: 2.5rem;
        border-bottom: 1px solid rgb(229, 231, 235);
      }
      ul {
        li {
          padding: 40px 0px;
          border-bottom: 1px solid rgb(229, 231, 235);

          div {
            position: relative;
            h4 {
              color: var(--black);
              font-size: 22px;
              font-weight: 600;
              line-height: 28px;
            }
            h5 {
              font-size: 18px;
              font-weight: 400;
              margin-top: 0.5rem;
              color: var(--black-shade);
            }
            p {
              position: absolute;
              right: 0%;
              top: 100%;
              color: var(--grey);
              width: 200px;
              text-align: right;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
      grid-gap: 2rem;

      img {
        width: 100%;
        height: 350px;
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    .card {
      position: relative;
      h1 {
        margin-top: 3rem;
        font-size: 104px;
        font-weight: 700;
        line-height: 120px;
        letter-spacing: -2px;
        span {
          color: var(--grey);
        }
      }
      p {
        font-size: 22px;
        font-weight: 500;
        line-height: 28.6px;
        color: var(--black-shade);
        margin-top: 5rem;
      }
      .social_btn {
        position: absolute;
        right: 0%;
        bottom: 0%;
        padding: 24px 40px;
        border-radius: 44px;
        color: #fff;
        background-color: var(--black);
        font-size: 22px;
        font-weight: 600;
        cursor: pointer;

        .icon {
          margin-left: 1rem;
          font-size: 25px;
        }
      }
    }
  }
  @media only screen and (max-width: 991px) {
    margin: 0px 15px;
    .grid {
      grid-template-columns: 1fr;

      .card {
        h1 {
          font-size: 56px;
          font-weight: 600;
          line-height: 65px;
          margin-top: 2rem;
        }
        .social_btn {
          position: relative;
          margin-top: 3rem;
        }
        p {
          font-size: 22px;
          font-weight: 500;
          line-height: 28.6px;
          color: var(--black-shade);
          margin-top: 0rem;
        }
      }
    }
  }
`;
