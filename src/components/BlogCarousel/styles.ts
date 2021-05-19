import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;

  .card {
    margin: 4rem auto;
    width: 20rem;
    height: 27rem;
    border: 1px solid inherit;
    border-radius: 0.5rem;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .cardImage {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    h1 {
      width: 18rem;
      margin: 1rem 1.4rem;
      color: var(--violet-100);
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.6rem;
      margin-bottom: 1.6rem;
    }

    .card-footer {
      display: flex;
      align-items: center;
      margin-right: auto;
      margin-left: 1.4rem;
      margin-bottom: 1rem;

      div {
        background-color: #aaa;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        overflow: hidden;
        position: relative;
        margin: 0 auto;

        img {
          position: absolute;
          top: 0;
          width: 100%;
        }
      }

      span {
        margin-left: 0.6rem;
        font-size: 2rem;
        color: var(--purple-20);
        font-size: 1rem;
        line-height: 1.8rem;
        text-align: left;
      }
    }
  }
`;
