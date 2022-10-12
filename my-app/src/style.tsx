import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
    width: 80%;
    height: 20vh;
    background-color: var(--repo-background);
    padding: 20px;
    list-style-type: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all ease 500ms;
    font-size: clamp(12px, 1.3vw, 30px);

    b {
      color: var(--global-background);
    }

    a {
      color: var(--global-background);
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
    
    p{
        color: white;   
        font-size: clamp(12px, .8em, 100px);
        position: absolute;
        top: 30px;
        right: 30px;
    }

    input{
        width: 50%;
        height: 5vh;
        margin-top: 5vh;
        background-color: var(--input-background);
        padding: 3vh;
        font-size: clamp(12px, 1.5vw, 30px);
        border-radius: 5px;
        border: none;

        ::placeholder{
            color: var(--input-text)
        }
    }
`
export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    background-color: var(--footer-background);
`
