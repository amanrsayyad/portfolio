import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRight, AiOutlineMenu, AiOutlineClose } from "../utils/icon";

const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <div className={toggleMenu ? "bg_black padding" : "padding"}>
      <HeaderMain>
        <div onClick={() => setToggleMenu(false)}>
          <Link to="/">
            <h4 style={{ color: toggleMenu ? "#fff" : "" }}>
              Port<span>folio.</span>
            </h4>
          </Link>
        </div>
        <div className="flex-center">
          <Link
            to="/contact-us"
            className={
              toggleMenu
                ? "border_white color_white contactBtn btn flex-center"
                : "border_black color_black contactBtn btn flex-center"
            }
          >
            Contact Me
          </Link>
          <Link
            to="#"
            className={
              toggleMenu
                ? "border_white color_white btn flex-center"
                : "border_black color_black btn flex-center"
            }
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? (
              <AiOutlineClose
                className={toggleMenu ? "color_white icon" : "icon"}
              />
            ) : (
              <AiOutlineMenu className="icon" />
            )}
          </Link>
        </div>
      </HeaderMain>
      {toggleMenu ? (
        <>
          <div className="border"></div>
          <HeaderList>
            <li onClick={() => setToggleMenu(false)}>
              <Link to="/" className="space-between">
                Home
                <div className="icon_div flex-center">
                  <BsArrowRight className="icon" />
                </div>
              </Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link to="/about" className="space-between">
                About Me
                <div className="icon_div flex-center">
                  <BsArrowRight className="icon" />
                </div>
              </Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link to="/works" className="space-between">
                Works
                <div className="icon_div flex-center">
                  <BsArrowRight className="icon" />
                </div>
              </Link>
            </li>
          </HeaderList>
          <FollowMe>
            <h4>Follow Me.</h4>
            <ul className="space-between">
              <li>
                <a href="#" className="flex-center">
                  INSTAGRAM
                  <BsArrowRight className="icon" />
                </a>
              </li>
              <li>
                <a href="#" className="flex-center">
                  LINKEDIN
                  <BsArrowRight className="icon" />
                </a>
              </li>
              <li>
                <a href="#" className="flex-center">
                  TWITTER
                  <BsArrowRight className="icon" />
                </a>
              </li>
              <li>
                <a href="#" className="flex-center">
                  GITHUB
                  <BsArrowRight className="icon" />
                </a>
              </li>
            </ul>
          </FollowMe>
        </>
      ) : null}
    </div>
  );
};

export default Header;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  .border {
    width: 100%;
    height: 1px;
    background-color: var(--grey);
    padding-bottom: 5rem;
  }

  div {
    h4 {
      font-size: 27px;
      font-weight: 700;
      color: var(--black);

      span {
        color: rgb(182, 188, 198);
      }
    }
    .toggleBtn {
      position: relative;
      border-radius: 25px;
      font-weight: 500;
      margin-left: 1.5rem;
      width: 100px;
      height: 50px;

      .ico_light {
        position: absolute;
        top: -0.3%;
        left: 0%;
        width: 48.5px;
        height: 48.5px;
        border-radius: 50%;
        cursor: pointer;
      }
      .ico_dark {
        position: absolute;
        top: 0%;
        right: 0%;
        width: 48.5px;
        height: 48.5px;
        border-radius: 50%;
        cursor: pointer;
      }
      .icon {
        font-size: 25px;
      }
    }
    .btn {
      border-radius: 25px;
      padding: 15px 24px;
      font-weight: 500;
      margin-left: 1.5rem;

      .icon {
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    margin: 0px 0px;

    div {
      .toggleBtn {
        display: none;
      }
      .btn {
        border-radius: 25px;
        padding: 10px 20px;
        font-weight: 500;
        margin-left: 1.5rem;

        .icon {
          font-size: 20px;
        }
      }
    }
    .contactBtn {
      display: none;
    }
  }
`;

const HeaderList = styled.ul`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  border-top: 1px solid rgb(31, 41, 55);
  border-bottom: 1px solid rgb(31, 41, 55);
  li {
    margin: 1.8rem 0rem;
    a {
      font-size: 72px;
      line-height: 90px;
      font-weight: 600;
      color: #fff;

      .icon_div {
        background-color: #fff;
        width: 60px;
        height: 60px;
        border-radius: 50%;

        .icon {
          color: var(--black);
          font-size: 30px;
          transform: rotate(-45deg);
        }
      }

      &:hover {
        color: var(--grey);
        transition: all 0.3s ease-in;

        .icon_div {
          .icon {
            transform: rotate(0deg);
            transition: all 0.3s ease-in;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    li {
      a {
        font-size: 56px;
        font-weight: 600;
        line-height: 65px;

        .icon_div {
          display: none;
        }
      }
    }
  }
`;

const FollowMe = styled.div`
  h4 {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
    color: rgb(107, 114, 128);
  }
  ul {
    margin: 2rem 1rem;
    li {
      a {
        color: #fff;
        font-weight: 600;

        .icon {
          font-size: 25px;
          transform: rotate(-45deg);
          margin-left: 0.7rem;
        }

        &:hover {
          color: var(--grey);

          .icon {
            color: var(--grey);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 991px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      margin: 2rem 1.5rem;
      margin-bottom: 1rem;

      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }
`;
