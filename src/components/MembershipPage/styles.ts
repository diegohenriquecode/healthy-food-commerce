import styled from "styled-components";

export const MembershipPageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  img {
    overflow: hidden;
  }
`;

export const MembershipPageContent = styled.div`
  max-width: 800px;
  display: inline-block;
  margin: 0 auto;
  position: relative;

  h1 {
    @media (max-width: 1280px) {
      margin-left: 2rem;
    }

    font-size: 2.2rem;
    font-weight: 500;
    color: var(--violet-100);
  }

  div {
    height: 1rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;

    input {
      @media (max-width: 1280px) {
        margin-left: 2rem;
      }

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
      color: var(--white-100);
      font-size: 1rem;
      padding: 1rem 1.6rem;
      border: none;
      border-radius: 0.4rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.94);
      }
    }
  }
`;
