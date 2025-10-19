import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 100px auto;
`
