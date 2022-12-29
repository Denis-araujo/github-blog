import styled from 'styled-components'

export const Header = styled.header`
  height: 18rem;
  background-color: ${(props) => props.theme.baseProfile};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  z-index: 0;
`

export const Logo = styled.img`
  margin-bottom: 4rem;
`
