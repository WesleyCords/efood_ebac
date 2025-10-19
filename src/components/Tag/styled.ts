import styled from 'styled-components'

import collors from '../../styles/variable'

type TagProps = {
  variant: 'primary' | 'secondary'
}

export const Button = styled.button<TagProps>`
  padding: 0 8px;
  background-color: ${(props) =>
    props.variant === 'primary' ? collors.pinkHigh : collors.pink};
  color: ${(props) =>
    props.variant === 'primary' ? '#fff' : collors.pinkHigh};
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  display: ${(props) =>
    props.variant === 'primary' ? 'inline-block' : 'block'};
`
