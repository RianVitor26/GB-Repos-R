import { useState, useEffect } from 'react';
import Global from './globalStyle'
import * as C from './style'

interface Repo {
  name: string;
  description: string;
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([])
  
  useEffect(() => {
    fetch('https://api.github.com/users/rianvitor26/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  })

  return (
    <C.Container>
      <C.InputContainer>
        <input type="text" name="search" placeholder="Buscar" />
      </C.InputContainer>

      <ul>
        {repos.map(repo => {
          return (
              <li key={repo.name}>
                  {repo.name}
              </li>
            )
          })}
      </ul>
      <Global />
    </C.Container>
  )
}

export default App
