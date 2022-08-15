import styled from 'styled-components'

export const Container = styled.div`
width: 100%;

ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

ul li{
    color: #9e9e9e;
    margin-top: 20px;
    width: 20%;
    background-color: black;
    padding: 20px;
    list-style-type: none;
    cursor: pointer;
    border-radius: 10px;
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
        background-color: #cecece;
        padding: 20px;
        font-size: 18px;
        border-radius: 10px;
        border: none;

        ::placeholder{
            color: #585858
        }
    }
`
