import styled from 'styled-components'

import collors from '../../styles/variable'

export const FieldContainer = styled.div<{ maxWidth?: string; error?: string }>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  input,
  select {
    background-color: ${collors.pink};
    height: 32px;
    padding: 0 8px;
    border: 2px solid ${(props) => (props.error ? 'red' : collors.pinkHigh)};
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
`
