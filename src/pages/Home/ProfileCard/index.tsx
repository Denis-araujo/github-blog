import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import * as S from './styles'

interface ProfileCardProps {
  name: string
  bio: string
  htmlUrl: string
  followers: number
  avatarUrl: string
}

export function ProfileCard({
  name,
  avatarUrl,
  bio,
  followers,
  htmlUrl,
}: ProfileCardProps) {
  return (
    <S.ProfileCard>
      <S.AvatarCard>
        <S.AvatarImg src={avatarUrl} alt="" />
      </S.AvatarCard>

      <S.InformationCard>
        <S.CardName>
          <S.AvatarName>{name}</S.AvatarName>
          <S.GithubLink href={htmlUrl}>
            github <ArrowSquareOut size={15} weight="bold" />
          </S.GithubLink>
        </S.CardName>

        <S.AvatarDescription>{bio}</S.AvatarDescription>

        <S.CardSocial>
          <span>
            <GithubLogo size={16} weight="thin" /> {name}
          </span>
          <span>
            {' '}
            <Users size={16} weight="thin" />
            {followers}
          </span>
        </S.CardSocial>
      </S.InformationCard>
    </S.ProfileCard>
  )
}
