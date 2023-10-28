import React, { useEffect } from "react";
import styled from "styled-components";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ContactMain className="flex-center flex-col">
      <h1>Welcome them! and express your ideas</h1>
      <p>Enjoy great tasks? Connect and let's talk.</p>
      <form className="flex-center flex-col">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Message"
        ></textarea>
        <button>Sign Up</button>
      </form>
    </ContactMain>
  );
};

export default Contact;

const ContactMain = styled.div`
  padding: 4rem calc(-625px + 48vw) 1.5rem;

  h1 {
    font-size: 104px;
    font-weight: 700;
    line-height: 120px;
    text-align: center;
    letter-spacing: -4px;
    margin-bottom: 3.5rem;
  }
  p {
    font-size: 22px;
    color: var(--black-shade);
  }
  form {
    margin-top: 4.5rem;

    input,
    textarea {
      appearance: none;
      display: inline-block;
      width: 650px;
      line-height: 1.4em;
      outline: none;
      border: none;
      padding: 25px;
      border-radius: 8px;
      font-weight: 400;
      font-size: 16px;
      background-color: rgb(249, 250, 251);
      color: var(--black-shade);
      margin-bottom: 1.5rem;

      &::placeholder {
        color: var(--black-shade);
      }
    }
    button {
      appearance: none;
      display: inline-block;
      width: 100%;
      line-height: 1.4em;
      outline: none;
      border: none;
      border-radius: 8px;
      padding: 25px;
      font-weight: 600;
      font-size: 16px;
      background: var(
        --token-6adcdab5-14b1-4cc8-98fe-c500ee8d1c6c,
        rgb(3, 7, 18)
      );
      cursor: pointer;
      color: var(
        --token-e4929cff-30d5-4937-8862-c78e5215407a,
        rgb(255, 255, 255)
      );
      z-index: 1;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 991px) {
    margin: 0px 15px;
    h1 {
      font-size: 56px;
      font-weight: 600;
      line-height: 65px;
    }
    p {
      text-align: center;
    }
    form {
      input,
      textarea {
        width: 100%;
      }
    }
  }
`;
