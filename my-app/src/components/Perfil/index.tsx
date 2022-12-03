import * as C from "./style";
import { useEffect, useState } from "react";
import { RiUserFollowFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { RiUserFollowLine } from "react-icons/ri";

interface IPerfil{
  login: string;
  bio: string;
  forks: number;
  blog: string;
  location: string;
  followers: number;
  following: number;
}


export const Perfil = () => {
  const [perfil, setPerfil] = useState<IPerfil>();

  useEffect(() => {
    fetch("https://api.github.com/users/rianvitor26")
      .then((response) => response.json())
      .then((data) => setPerfil(data));
  }, []);

  console.log(perfil)

  return (
    <>
      <C.PerfilContainer>
        <C.SocialMedias>
          <a target="blank" href="https://github.com/RianVitor26">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </a>
          <a href="https://www.linkedin.com/in/rian-vitor-a036aa202/">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          </a>
          <a href="https://rianvitor.vercel.app/">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" />
          </a>
        </C.SocialMedias>
        <C.Avatar />
        <h1>{perfil?.login}</h1>
        <h2>{perfil?.bio}</h2>
        <a target="blank" href={"https://" + perfil?.blog}>
          My Links
        </a>
        <C.Follow>
          <p><RiUserFollowFill></RiUserFollowFill>Followers: {perfil?.followers}</p>
          <p><RiUserFollowLine></RiUserFollowLine>Following: {perfil?.following}</p>
        </C.Follow>
        <p><ImLocation2></ImLocation2>Location: {perfil?.location} </p>
      </C.PerfilContainer>
    </>
  );
};
