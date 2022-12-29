import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <header>
        <S.ProfileCard>
          <S.AvatarCard>
            <S.AvatarImg
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=148&q=80"
              alt=""
            />
          </S.AvatarCard>

          <S.InformationCard>
            <S.CardName>
              <S.AvatarName>Cameron Williamson</S.AvatarName>
              <S.GithubLink>
                github <ArrowSquareOut size={15} weight="bold" />
              </S.GithubLink>
            </S.CardName>

            <S.AvatarDescription>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </S.AvatarDescription>

            <S.CardSocial>
              <span>
                <GithubLogo size={16} weight="thin" /> cameronwll
              </span>
              <span>
                {' '}
                <Users size={16} weight="thin" />
                32 seguidores
              </span>
            </S.CardSocial>
          </S.InformationCard>
        </S.ProfileCard>
      </header>

      <form>
        <div>
          <span></span>
          <span></span>

          <input type="text" />
        </div>
      </form>
    </S.Container>
  )
}
