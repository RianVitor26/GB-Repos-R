import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

:root{
    --global-background: #050505;
    --repo-background: #161616;
    --repo-background-hover: #1d1d1d;
    --repo-text: #c0c0c0;
    --input-background: #c0c0c0;
    --input-text: #181818;
    --footer-background: #161616; 
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Sans-Serif;
    background-color: var(--global-background);
}
`

export default Global