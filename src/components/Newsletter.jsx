import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <NewsletterMain>
      <div className="data flex-center flex-col">
        <p>Have an idea?</p>
        <h1>
          Let’s rock <span>with me</span>
        </h1>
        <div className="flex-center links">
          <Link to="/about">ABOUT ME</Link>
          <Link to="/works">WORKS</Link>
          <Link to="/contact-us">CONTACT ME</Link>
        </div>
      </div>
    </NewsletterMain>
  );
};

export default Newsletter;

const NewsletterMain = styled.div`
  padding: 4rem calc(-625px + 48vw) 1.5rem;
  padding-bottom: 0rem;

  .data {
    padding: 50px 0px;
    border-top: 1px solid var(--black);
    border-bottom: 1px solid var(--black);

    p {
      font-size: 22px;
      font-weight: 500;
    }
    h1 {
      margin-top: 2.8rem;
      font-size: 104px;
      font-weight: 700;
      letter-spacing: -4px;

      span {
        color: var(--grey);
      }
    }
    .links {
      margin-top: 3.3rem;
      a {
        margin: 0px 35px;
        color: var(--black);
        text-decoration: underline;
        font-weight: 600;
        font-size: 16px;
        letter-spacing: -1px;

        &:hover {
          color: var(--grey);
        }
      }
    }

    @media only screen and (max-width: 991px) {
      h1 {
        font-size: 48px;
      }
      .links {
        a {
          margin: 0px 10px;
        }
      }
    }
  }
`;
