import styled from "styled-components";

export const ContainerHeader = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--white-100);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
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
    margin-left: auto;
    height: 5rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: var(--white-100);
      cursor: pointer;
      transition: 0.2s;

      & + a {
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
    margin-left: 2rem;
  }
`;
