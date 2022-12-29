import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 19rem;
  margin-top: -5rem;

  /* z-index: 0; */
  display: block;
  position: fixed;
`
export const ProfileCard = styled.div`
  background-color: ${(props) => props.theme.baseProfile};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const AvatarCard = styled.div`
  max-width: 9rem;
  max-height: 9rem;

  margin: 2rem;
  margin-left: 2.5rem;
`

export const AvatarImg = styled.img`
  width: 9rem;
  height: 9rem;
  object-fit: fill;
`

export const InformationCard = styled.div`
  margin-right: 2rem;
`

export const CardName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 1rem;
`

export const AvatarName = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 130%;

  color: ${(props) => props.theme.baseTitle};
`

export const GithubLink = styled.a`
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};
  font-size: 1rem;

  gap: 8px;

  cursor: pointer;
`

export const AvatarDescription = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;

  color: ${(props) => props.theme.baseText};
`

export const CardSocial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 2rem;

  margin-top: 2rem;

  span {
    gap: 8px;
    color: ${(props) => props.theme.baseLabel};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`
