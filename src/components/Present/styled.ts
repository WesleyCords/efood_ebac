import styled from 'styled-components'

export const PresentContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  color: #fff;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
  }
`
export const Details = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h3 {
    color: #aaa;
    font-weight: 400;
  }
`
