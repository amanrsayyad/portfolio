import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "../utils/icon";
import { agro, shop } from "../utils/images";

const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <WorksContainer>
      <div className="data">
        <p>My Works</p>
        <h1>
          Creating advanced tech <span>digital projects</span>
        </h1>
      </div>
      <WorksMain>
      <div className="grid">
        <div className="card">
          <img
            src={shop}
            alt=""
          />
          <div className="cardTitle space-between">
            <div>
              <h4>Shop.Co</h4>
              <p>Eccomerce Website</p>
            </div>
            <a href="https://lucky-elf-7b4810.netlify.app/" target="_blank" className="btnLink">
              <BsArrowRight className="icon" />
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={agro}
            alt=""
          />
          <div className="cardTitle space-between">
            <div>
              <h4>Dnyaneshwar Agro</h4>
              <p>Marketing & Business Website</p>
            </div>
            <a href="https://dnyaneshwaragro.in/" target="_blank" className="btnLink">
              <BsArrowRight className="icon" />
            </a>
          </div>
        </div>
      </div>
      </WorksMain>
    </WorksContainer>
  );
};

export default Works;

const WorksContainer = styled.div`
  padding: 4rem calc(-625px + 48vw) 1.5rem;
  .data {
  }
  p {
    font-size: 22px;
    font-weight: 500;
    color: var(--black);
  }
  h1 {
    font-size: 104px;
    margin-top: 30px;
    margin-bottom: 70px;
    letter-spacing: -4px;
    line-height: 120px;

    span {
      color: rgb(182, 188, 198);
    }
  }
  @media only screen and (max-width: 991px) {
    .data {
      margin: 0px 15px;
    }
    h1 {
      font-size: 56px;
      line-height: 65px;
      font-weight: 600;
      margin-bottom: 40px;
    }
  }
`;

const WorksMain = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin-top: 3rem;

    .card {
      img {
        width: 100%;
        height: 700px;
        border-radius: 35px 35px 0px 0px;
      }
      .cardTitle {
        margin-top: 1rem;
        h4 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }
        p {
          color: var(--black-shade);
          font-size: 19px;
        }
        .btnLink {
          border-radius: 25px;
          padding: 12px 22px;
          border: 1px solid var(--black);
          font-weight: 500;
          color: var(--black);

          .icon {
            font-size: 20px;
          }

          &:hover {
            border: 1px solid var(--grey);

            .icon {
              color: var(--grey);
            }
          }
        }
      }
    }

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;

      .card {
        img {
          width: 100%;
          height: 300px;
        }
      }
    }
  }
  @media only screen and (max-width: 991px) {
    margin: 0px 15px;
  }
`;
