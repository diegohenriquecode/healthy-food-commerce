import styled from "styled-components";

export const ServicesPageSection = styled.section`
  display: flex;

  div {
    width: 26rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: var(--violet-100);
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3rem;
      margin-bottom: 1.6rem;
    }

    p {
      font-size: 2rem;
      color: var(--purple-20);
      font-size: 1rem;
      line-height: 1.8rem;
      text-align: left;
    }

    button {
      margin-top: 2rem;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08),
        0 10px 10px rgba(0, 0, 0, 0.06);
      background: var(--green-100);
      color: var(--white-100);

      display: flex;
      align-items: center;
      justify-content: center;

      width: 9.6rem;
      height: 3.4rem;

      font-size: 1rem;
      font-weight: 400;
      border: 0;
      border-radius: 0.3rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
