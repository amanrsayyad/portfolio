import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRight } from "../../utils/icon";

const Works = () => {
  return (
    <WorksMain>
      <div className="header space-between">
        <div>
          <h4>Selected works</h4>
        </div>
        <div>
          <Link to="/works" className="btn flex-center">
            View All Works <BsArrowRight className="icon" />
          </Link>
        </div>
      </div>
      <div className="grid">
        <div className="card">
          <img
            src="https://framerusercontent.com/images/6babye8epZSGsKlHmmaeaww4mis.png"
            alt=""
          />
          <div className="cardTitle space-between">
            <div>
              <h4>Google</h4>
              <p>Branding</p>
            </div>
            <Link to="#" className="btnLink">
              <BsArrowRight className="icon" />
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://framerusercontent.com/images/2oPFIFPke06X7dQc4yRgpdiMtU.jpg?scale-down-to=2048"
            alt=""
          />
          <div className="cardTitle space-between">
            <div>
              <h4>Figma</h4>
              <p>Mobile App</p>
            </div>
            <Link to="#" className="btnLink">
              <BsArrowRight className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </WorksMain>
  );
};

export default Works;

const WorksMain = styled.div`
  padding: 4rem calc(-625px + 48vw) 1.5rem;
  padding-bottom: 2.5rem;

  .header {
    h4 {
      font-size: 40px;
      font-weight: 600;
    }
    .btn {
      border-radius: 25px;
      padding: 15px 24px;
      border: 1px solid var(--black);
      font-weight: 500;
      color: var(--black);

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
    @media only screen and (max-width: 991px) {
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      margin-bottom: 1.5rem;

      .btn {
        margin-top: 1rem;
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-top: 3rem;

    .card {
      img {
        width: 100%;
        height: 500px;
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
