import styled from 'styled-components'

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
  color: var(--repo-text);
  text-align: center;

  h1,
  h2 {
    color: var(--repo-text);
    font-size: clamp(14px, 1em, 100px);
    padding: 1em 0;
  }

  p {
    padding: 1em 0;
    color: var(--repo-text);
    font-size: clamp(12px, 0.8em, 100px);
  }

  a {
    color: var(--repo-background);
    :hover {
      color: var(--repo-background-hover);
    }
  }

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


export const Follow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;