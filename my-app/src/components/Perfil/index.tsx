import * as C from "./style";
import { useEffect, useState } from "react";

interface Perfil {
  login: string;
  bio: string;
  blog: string;
  followers: number;
  following: number;
  location: string;
}

export const Perfil = () => {
  const [perfil, setPerfil] = useState<Perfil>({});

  useEffect(() => {
    fetch("https://api.github.com/users/rianvitor26")
      .then((response) => response.json())
      .then((data) => setPerfil(data));
  }, []);
  console.log(perfil);

  return (
    <>
      <C.PerfilContainer>
        <C.Avatar />
        <h1>{perfil.login}</h1>
        <h2>{perfil.bio}</h2>
        <a target="blank" href={"https://" + perfil.blog}>
          My Links
        </a>
        <C.Follow>
          <p>Followers: {perfil.followers}</p>
          <p>Following: {perfil.following}</p>
        </C.Follow>
        <p>Location: {perfil.location} </p>
      </C.PerfilContainer>
    </>
  );
};
