import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroMain>
      <p>
        Hello! I’m <span>Aman Sayyad.</span>
      </p>
      <h1>
        Developing web & mobile application emphasizing{" "}
        <span>complex features</span>
      </h1>
      <div className="header space-between">
        <Link to="/contact-us" className="btn">
          Let's Talk
        </Link>
        <h5>
          A versatile designer leveraging the potency of design to accomplish
          digital objectives.
        </h5>
      </div>
    </HeroMain>
  );
};

export default Hero;

const HeroMain = styled.div`
  padding: 4rem calc(-625px + 48vw) 1.5rem;

  p {
    font-size: 22px;
    font-weight: 500;
    color: rgb(182, 188, 198);
  }
  h1 {
    font-size: 104px;
    margin-top: 30px;
    margin-bottom: 70px;
    letter-spacing: -4px;

    span {
      color: rgb(182, 188, 198);
    }
  }
  .btn {
    background-color: rgb(3, 7, 18);
    padding: 24px 40px;
    border-radius: 44px;
    font-size: 22px;
    font-weight: 600;
    color: #fff;
  }
  h5 {
    width: 40%;
    color: rgb(55, 65, 81);
    font-size: 23px;
    font-weight: 500;
  }

  @media only screen and (max-width: 991px) {
    margin: 0px 15px;
    h1 {
      font-size: 48px;
      margin-bottom: 40px;
    }
    .header {
      flex-direction: column-reverse;
    }
    h5 {
      width: 100%;
    }
    .btn {
      width: 100%;
      text-align: center;
      margin-top: 3rem;
      background-color: rgb(3, 7, 18);
      padding: 24px 40px;
      border-radius: 44px;
      font-size: 22px;
      font-weight: 600;
      color: #fff;
    }
  }
`;
