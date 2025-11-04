import styled from 'styled-components'

import collors from '../../styles/variable'

export const FieldContainer = styled.div<{ maxWidth?: string }>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  input,
  select {
    background-color: ${collors.pink};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${collors.pink};
    width: 100%;
  }

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  &:focus {
    border-color: ${collors.pinkHigh};
    outline: none;
  }
`
