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
`

export const Title = styled.h1`
  font-family: 'Concert One', sans-serif;
  font-weight: 400;
  font-style: normal;
`

export default GlobalStyle
