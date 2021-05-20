import styled from "styled-components";

export const RegisterPageContainer = styled.section`
  @media (max-width: 720px) {
    height: 100vh;
    width: 100%;
  }

  img {
    @media (max-width: 720px) {
      display: none;
    }
  }

  .firstSection {
    @media (max-width: 720px) {
      display: none;
    }

    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: auto;
    z-index: -1;

    ul {
      margin-top: 1rem;
    }

    li {
      color: var(--blue-20);
      font-weight: bold;
      font-size: 1.5rem;

      & + li {
        color: black;
      }
    }

    p {
      color: var(--gray-50);
      width: 80%;
      margin: 0 auto;
      font-size: 1.2rem;
    }
  }

  h1 {
    line-height: 4.2rem;
    font-size: 3.2rem;
    color: var(--violet-100);
    margin: 5.5rem auto auto;
  }

  margin-top: -5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RegisterPageSection = styled.div`
  @media (max-width: 720px) {
    margin: 0 auto;

    form {
      display: flex;
      flex-direction: column;
    }
  }

  max-width: 800px;
  display: inline-block;
  margin-left: auto;
  position: relative;

  div {
    height: 1rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;

    input {
      height: 3.2rem;
      width: 18rem;
      border-radius: 0.4rem;
      border: 2px solid var(--gray-30);
      padding-left: 0.8rem;
      color: var(--gray-30);

      &::placeholder {
        color: var(--gosth);
        padding-left: 0.2rem;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      margin: 0 auto 0 1rem;
      background: var(--green-100);
      padding: 0.85rem 0.85rem;
      border: none;
      border-radius: 0.4rem;

      .FiSearch {
        font-size: 1rem;
        color: var(--white-100);
      }
    }
  }
`;
