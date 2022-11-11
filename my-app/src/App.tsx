import { useState, useEffect } from "react";
import Global from "./globalStyle";
import * as C from "./style";
import { Perfil } from "./components/Perfil";
import axios from "axios";
import { BiGitRepoForked } from "react-icons/bi";
import { BsStack } from "react-icons/bs";

interface Repo {
  name: string;
  description: string;
  forks: number;
  clone_url: string;
  language: string;
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/rianvitor26/repos")
      .then((response) => setRepos(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredRepos(repos.filter((repo) => repo.name.includes(search)));
  }, [search]);

  return (
    <C.Wrapper>
      <Perfil />

      <C.ReposContainer>
        <C.InputContainer>
          <input
            type="text"
            name="search"
            placeholder="Buscar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <p>Public repos: {repos.length}</p>
        </C.InputContainer>

        {/* Loading do Sistema */}
        {isLoading && <span>Loading....</span>}

        {/* Filtragem dos repositórios */}
        {search.length > 0 ? (
          <ul>
            {filteredRepos.map((repo) => {
              return (
                <li key={repo.name}>
                  <b>{repo.name}</b>: {repo.description}
                  <C.Icons>
                    <BiGitRepoForked></BiGitRepoForked> {repo.forks}
                  </C.Icons>
                  <p>
                    <BsStack></BsStack> {repo.language}
                  </p>
                  <a target="blank" href={repo.clone_url}>
                    Source code
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          // Exibindo a lista de repositórios por padrão
          <ul>
            {repos.map((repo) => {
              return (
                <li key={repo.name}>
                  <b>{repo.name}</b>: {repo.description}
                  <C.Icons>
                    <BiGitRepoForked></BiGitRepoForked> {repo.forks}
                  </C.Icons>
                  <p>
                    <BsStack></BsStack> {repo.language}
                  </p>
                  <p></p>
                  <a target="blank" href={repo.clone_url}>
                    Source code
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        {filteredRepos.length < 1 ? (
          <span>
            Not found repos
            <img src="githubMascote.png" alt="" />
          </span>
        ) : null}

        <C.Footer>
          <p style={{ color: "var(--repo-text)" }}>
            Developed with
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            by
            <a
              style={{ color: "var(--alert)" }}
              target="_blank"
              href="https://github.com/RianVitor26"
            >
              RianVitor26
            </a>
          </p>
        </C.Footer>
      </C.ReposContainer>
      <Global />
    </C.Wrapper>
  );
}

export default App;
