import styled from 'styled-components'

export const Container = styled.div`
width: 100%;

ul{
display: grid;
place-items: center;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
}

li{
    color: var(--repo-text);
    margin-top: 20px;
    width: 80%;
    background-color: var(--repo-background);
    padding: 20px;
    list-style-type: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all ease 500ms;

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
        width: 30%;
        height: 40px;
        margin-top: 20px;
        background-color: var(--input-background);
        padding: 20px;
        font-size: 18px;
        border-radius: 10px;
        border: none;

        ::placeholder{
            color: var(--input-text)
        }
    }
`
