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

export const PerfilContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: var(--perfil-background);
  padding: 0 2em;
  word-wrap: break-word;
  min-width: 500px;
  color: var(--repo-text);
  text-align: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Avatar = styled.div`
  width: 10em;
  height: 10em;
  border-radius: 50%;
  border: 2px solid white;
  background-image: url("avatar.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;



export const ReposContainer = styled.div`
width: 100%;
overflow-y: auto;
min-width: 300px;
display: flex;
flex-direction: column;

ul{
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
}

li{
    overflow: auto;
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

    :hover{
        transform: translateY(-10px);
        background-color: var(--repo-background-hover);
    }
}
`

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
