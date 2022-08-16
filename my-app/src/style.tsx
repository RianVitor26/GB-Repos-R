import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

ul{
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
}

li{
    overflow: auto;
    color: var(--repo-text);
    margin-top: 4vh;
    width: 80%;
    height: 10vh;
    background-color: var(--repo-background);
    padding: 20px;
    list-style-type: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all ease 500ms;
    font-size: clamp(12px, 1.3vw, 30px);

    :hover{
        transform: translateY(-10px);
        background-color: var(--repo-background-hover);
    }
}
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    input{
        width: 50%;
        height: 5vh;
        margin-top: 5vh;
        background-color: var(--input-background);
        padding: 3vh;
        font-size: clamp(12px, 1.5vw, 30px);
        border-radius: 5px;
        border: none;

        ::placeholder{
            color: var(--input-text)
        }
    }
`
export const Footer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    background-color: var(--footer-background)
`
