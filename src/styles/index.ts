import styled, { createGlobalStyle } from 'styled-components'
import { Button } from '../components/Button/styled'

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

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 60px auto;
`

export const Row = styled.div`
  display: flex;
  gap: 16px;
`

export const RowButtons = styled.div`
  display: block;
  margin-top: 24px;

  ${Button} {
    margin-top: 8px;
  }
`
export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  font-weight: bold;
`
