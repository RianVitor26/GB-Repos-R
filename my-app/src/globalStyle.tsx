import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

:root{
    --global-background: #122620;
    --repo-background: #B68D40; 
    --repo-background-hover: #D6AD60;
    --repo-text: #F4EBD0;
    --input-background: #F4EBD0;
    --input-text: #122620;
    --footer-background: #122620; 
    --perfil-background: #0c1d18;
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
`;

export default Global