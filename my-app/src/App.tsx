import { useState, useEffect } from "react";
import Global from "./globalStyle";
import * as C from "./style";

interface Repo {
  name: string;
  description: string;
  created_at: string;
  clone_url: string;
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/rianvitor26/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  useEffect(() => {
    setFilteredRepos(repos.filter((repo) => repo.name.includes(search)));
  }, [search]);

  console.log(repos);

  return (
    <C.Wrapper>
      <C.PerfilContainer>
        <C.Avatar />
        <h1>Rian Vitor</h1>
        <h2>Desenvolvedor web.</h2>
      </C.PerfilContainer>

      <C.ReposContainer>
        <C.InputContainer>
          <input
            type="text"
            name="search"
            placeholder="Buscar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <p>Total de repos: {repos.length}</p>
        </C.InputContainer>
        {search.length > 0 ? (
          <ul>
            {filteredRepos.map((repo) => {
              return (
                <li key={repo.name}>
                  <b>{repo.name}</b>
                  <span>: </span>
                  {repo.description}
                  <p>Criado em: {repo.created_at.substring(0, 10)}</p>
                  <a target="blank" href={repo.clone_url}>
                    Source code
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul>
            {repos.map((repo) => {
              return (
                <li key={repo.name}>
                  <b>{repo.name}</b>
                  <span>: </span>
                  {repo.description}

                  <p>Criado em: {repo.created_at.substring(0, 10)}</p>
                  <a target="blank" href={repo.clone_url}>
                    Source code
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        <Global />
        <C.Footer>
          <p style={{ color: "var(--repo-text)" }}>
            Developed with &hearts; by{" "}
            <a
              style={{ color: "aqua" }}
              target="_blank"
              href="https://github.com/RianVitor26"
            >
              RianVitor26
            </a>
          </p>
        </C.Footer>
      </C.ReposContainer>
    </C.Wrapper>
  );
}

export default App;
