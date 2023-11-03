import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterMain>
      <h4>
        Port<span>foilio.</span>
      </h4>
      <p>Developing web & mobile application emphasizing complex features</p>
      <div className="links">
        <a href="https://www.instagram.com/aman_codes1/" target="_blank">INSTAGRAM</a>
        <a href="https://www.linkedin.com/in/aman-sayyad/" target="_blank">LINKEDIN</a>
        <a href="https://twitter.com/AmanRajuSayyad1" target="_blank">TWITTER</a>
        <a href="https://github.com/amanrsayyad/" target="_blank">GITHUB</a>
      </div>
      <div className="footer_grid">
        <div className="footer_links">
          <h5>Page List</h5>
          <div className="links_grid">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/works">Work Pages</Link>
            </div>
            <div>
              <Link to="/about">About Me</Link>
            </div>
            <div>
              <Link to="#">Blogs</Link>
            </div>
            <div>
              <Link to="/contact-us">Contacts</Link>
            </div>
          </div>
        </div>
        <div className="footer_newsletter">
          <h5>Stay connected newsletter me.</h5>
          <div className="jc-start newsletter">
            <input type="text" placeholder="name@gmail.com" />
            <div className="news_btn">Newsletter</div>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>
          ©2023. Designed & Developed by <a href="#">Aman Sayyad</a>
        </p>
      </div>
    </FooterMain>
  );
};

export default Footer;

const FooterMain = styled.div`
  padding: 4rem calc(-625px + 48vw) 1.5rem;
  background-color: var(--black);

  h4 {
    font-size: 50px;
    font-weight: 700;
    color: #fff;

    span {
      color: var(--grey);
    }
  }
  p {
    font-size: 22px;
    font-weight: 500;
    color: #fff;
    margin-top: 0.7rem;
  }
  .links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin-top: 3.5rem;
    a {
      color: #fff;
      border: 1px solid #fff;
      padding: 12px 24px 11px;
      border-radius: 25px;
      width: 100%;
      text-align: center;

      &:hover {
        color: var(--grey);
        border: 1px solid var(--grey);
        transition: all 0.2s ease-in;
      }
    }

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  .footer_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-top: 5.5rem;

    h5 {
      font-size: 22px;
      font-weight: 600;
      color: var(--grey);
    }
    .links_grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      margin-top: 2rem;

      div {
        a {
          color: #fff;

          &:hover {
            color: var(--grey);
            text-decoration: underline;
          }
        }
      }
      @media only screen and (max-width: 991px) {
        margin-bottom: 2rem;
        grid-row-gap: 2rem;
        grid-column-gap: 0rem;
      }
    }
    .newsletter {
      margin-top: 2rem;

      input {
        width: 100%;
        height: auto;
        outline: none;
        border: none;
        padding: 15px 24px;
        border-radius: 25px;
        font-size: 16px;
        background: none;
        border: 1px solid #fff;
        color: #fff;

        &::placeholder {
          color: #fff;
        }
      }
      .news_btn {
        background-color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 15px 40px;
        border-radius: 25px;
        font-size: 16px;
        font-weight: 500;
        margin-left: 1.2rem;
      }
    }

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
      margin-top: 2.5rem;

      .newsletter {
        flex-direction: column;

        .news_btn {
          width: 100%;
          margin-left: 0rem;
          text-align: center;
          margin-top: 1.3rem;
        }
      }
    }
  }
  .copy {
    text-align: center;
    padding-top: 45px;
    padding-bottom: 35px;

    p {
      font-size: 14px;
      color: var(--grey);

      a {
        color: #fff;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;
