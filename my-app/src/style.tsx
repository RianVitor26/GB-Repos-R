import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;


  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  //Loading
  span {
    color: var(--alert);
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content : center;

    img {
      width: 15rem;
      height: 10rem;
    }
  }
`;


export const ReposContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  li {
    color: var(--repo-text);
    margin-top: 4vh;
    width: 90%;
    height: 30vh;
    background-color: var(--repo-background);
    padding: 20px;
    list-style-type: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all ease 500ms;
    font-size: clamp(12px, 1.3vw, 30px);

    b {
      color: var(--repo-text);
    }

    a {
      color: var(--text-color);
      :hover {
        color: var(--alert);
      }
    }

    :hover {
      transform: translateY(-10px);
      background-color: var(--repo-background-hover);
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  p {
    color: #ffffff9d;
    font-size: clamp(12px, 0.8em, 100px);
    position: absolute;
    top: 10px;
    right: 30px;
  }

  input {
    width: 50%;
    min-width: 250px;
    height: 5vh;
    margin-top: 5vh;
    background-color: var(--input-background);
    padding: 3vh;
    font-size: clamp(12px, 1.5vw, 30px);
    border-radius: 5px;
    border: none;

    ::placeholder {
      color: var(--input-text);
    }
  }
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  height: 20vh;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  background-color: var(--footer-background);

  p {
    display: flex;
    align-items: center;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin: 2rem 2rem;
    animation: ${rotate} infinite linear 10s;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

`
