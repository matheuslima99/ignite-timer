import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme['gray-100']};
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  align-items: center;

  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`