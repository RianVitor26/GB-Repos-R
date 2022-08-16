import { useState, useEffect } from 'react';
import Global from './globalStyle'
import * as C from './style'

interface Repo {
  name: string;
  description: string;
}


function App() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/rianvitor26/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])  

  console.log("dda");
  

  useEffect(() => {
    setFilteredRepos(repos.filter(repo => repo.name.includes(search)))
  }, [search])

  return (
    <C.Container>
      <C.InputContainer>
        <input
          type="text"
          name="search"
          placeholder="Buscar" onChange={e => setSearch(e.target.value)} />
      </C.InputContainer>
      { search.length > 0 ? (
        <ul>
          {filteredRepos.map(repo => {
            return (
              <li key={repo.name}>
                {repo.name}
                {repo.description}
              </li>
            )
          })}
        </ul>
      ) : (
        <ul>
        {repos.map(repo => {
          return (
            <li key={repo.name}>
               <b>{repo.name}</b>
              <span>:  </span>
              {repo.description}
            </li>
          )
        })}
      </ul>  
      )}
     
      <Global />
      <C.Footer>
        <p 
          style={{ color: 'var(--repo-text)' }}>
          Developed with &hearts; by <a
            style={{ color: 'aqua'}}
            target="_blank"
            href="https://github.com/RianVitor26">RianVitor26</a>
        </p>
      </C.Footer>
    </C.Container>
  )
}

export default App
