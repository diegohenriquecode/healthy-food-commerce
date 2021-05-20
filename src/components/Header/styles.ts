import styled from "styled-components";

export const ContainerHeader = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--white-100);
`;

export const HeaderContent = styled.div`
  @media (max-width: 1280px) {
    max-width: 1024px;
    margin: 0 auto;

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 1024px;
    margin: 0 auto;

    h1 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 475px) {
    max-width: 100%;

    h1 {
      display: none;
    }
  }

  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  h1 {
    color: var(--green-100);
    font-weight: bold;
  }

  nav {
    @media (max-width: 475px) {
      margin: 0 auto;
    }

    margin-left: auto;
    height: 5rem;

    a {
      @media (max-width: 475px) {
        color: var(--green-100);
      }

      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: var(--white-100);
      cursor: pointer;
      transition: 0.2s;

      & + a {
        @media (max-width: 768px) {
          margin-left: 1rem;
        }

        @media (max-width: 475px) {
          margin-left: 2rem;
        }

        margin-left: 2rem;
      }

      &:hover {
        color: var(--white-100);
      }

      &.active {
        color: var(--white-100);
        font-weight: bold;
      }
    }
  }

  button {
    @media (max-width: 768px) {
      padding: 0.6rem 0.8rem;
      font-size: 0.9rem;
      margin-left: 1rem;
    }

    margin-left: 2rem;
  }
`;
