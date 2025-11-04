import styled from 'styled-components'

export const PresentContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  color: #fff;
  font-size: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
  }
`
export const ContainerDetails = styled.div`
  max-width: 1024px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
`

export const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 2;
  padding: 32px 0;

  h2 {
    font-weight: 900;
    font-style: black;
  }

  h3 {
    color: #aaa;
    font-weight: 100;
    font-style: thin;
  }
`
