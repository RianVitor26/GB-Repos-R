import styled from 'styled-components'

export const PerfilContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--perfil-background);
  padding: 0 2em;
  word-wrap: break-word;
  color: var(--repo-text);
  text-align: center;
  border-right: 1px solid var(--repo-background-hover);

  @media only screen and (max-width: 768px) {
    border-bottom: 1px solid var(--repo-background-hover);
  }

  h1,
  h2 {
    color: var(--repo-text);
    font-size: clamp(14px, 1em, 100px);
    padding: .5em 0;
  }

  h1{
    border-bottom: 1px solid var(--alert );
  }

  h2 {
    font-weight: 400;
  }

  p {
    padding: 1em 0;
    color: var(--repo-text);
    font-size: clamp(12px, 0.8em, 100px);
    background: var(--global-background);
    padding: 1rem;
    border-radius: 5px;
    margin: 0.5rem;
  }

  a {
    color: var(--alert);
    :hover {
      color: var(--alert);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SocialMedias = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem auto;
  
  img {
    width: 2rem;
    height: 2rem;
    transition:all ease .5s;

    :hover{
      transform: scale(150%);
    }
  }
`;

export const Avatar = styled.div`
  min-width: 10em;
  min-height: 10em;
  border-radius: 50%;
  border: 2px solid white;
  background-image: url("avatar.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;


export const Follow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;