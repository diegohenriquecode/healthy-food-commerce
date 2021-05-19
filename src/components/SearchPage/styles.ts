import styled from "styled-components";

export const SearchPageContainer = styled.section`
  /* height: calc(100vh - 5rem); */
  margin-top: -5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchPageSection = styled.div`
  max-width: 800px;
  display: inline-block;
  margin-left: auto;
  position: relative;

  h1 {
    line-height: 4.2rem;
    font-size: 3.2rem;
    color: var(--violet-100);
  }

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
