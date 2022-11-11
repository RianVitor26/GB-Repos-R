import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

:root{
    --global-background: #000000;
    --repo-background: #111111; 
    --repo-background-hover: #2b2b2b;;
    --repo-text: #e0e0e0;
    --input-background: #e0e0e0;
    --input-text: #212121;
    --footer-background: #0f0f0f; 
    --perfil-background: #0f0f0f;
    --alert: #00f7ff;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    svg{
       color: var(--alert);
       margin-right: .3rem;
    }
}

body{
    font-family: 'Poppins', Sans-Serif;
    background-color: var(--global-background);
}
`;

export default Global