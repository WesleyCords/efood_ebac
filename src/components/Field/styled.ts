import styled from 'styled-components'

import collors from '../../styles/variable'

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${collors.pink};
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-weight: semibold;

    &:focus {
      border-color: ${collors.pinkHigh};
      outline: none;
    }
  }
`
