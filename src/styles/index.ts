import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

export const Title = styled.h1`
  font-family: 'Concert One', sans-serif;
  font-weight: 400;
  font-style: normal;
`

export const Inputs = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Button = styled.button`
  padding: 8px;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  font-family: 'Concert One', sans-serif;
  background-color: #03a64a;

  &:hover {
    background-color: #02833e;
  }
`

export default GlobalStyle
