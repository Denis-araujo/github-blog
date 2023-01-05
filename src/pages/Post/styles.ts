import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 19rem;
  margin-top: -5rem;

  display: block;
`

export const Header = styled.header`
  background-color: ${(props) => props.theme.baseProfile};
  padding: 2rem;

  display: flex;
  flex-direction: column;

  position: relative;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.blue};
      font-weight: 700;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      text-transform: uppercase;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 16px;
      color: ${(props) => props.theme.baseSpan};
      gap: 0.5rem;
    }
  }
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;

  color: ${(props) => props.theme.baseTitle};
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
`

export const PostContent = styled.div`
  margin: 0 2rem;
`
