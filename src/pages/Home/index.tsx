import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { ProfileCard } from './ProfileCard'
import * as S from './styles'

type User = {
  name: string
  bio: string
  htmlUrl: string
  followers: number
  avatarUrl: string
}

export function Home() {
  const [user, setUser] = useState<User>()

  async function response() {
    const response = await api.get('maykbrito')
    const data = response.data

    setUser({
      name: data.login,
      bio: data.bio,
      htmlUrl: data.html_url,
      followers: data.followers,
      avatarUrl: data.avatar_url,
    })
  }

  useEffect(() => {
    response()
  }, [])

  return (
    <S.Container>
      <header>
        <ProfileCard
          name={user?.name!}
          avatarUrl={user?.avatarUrl!}
          bio={user?.bio!}
          followers={user?.followers!}
          htmlUrl={user?.htmlUrl!}
        />
      </header>

      <S.SearchForm>
        <div>
          <span>Publicações</span>
          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />
      </S.SearchForm>

      <S.ListOfPosts>
        <S.PostContainer>
          <S.PostContent>
            <div>
              <S.PostTitle>
                JavaScript data types and data structures
              </S.PostTitle>
              <S.PostTime>Há 1 dia</S.PostTime>
            </div>

            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = &apos;bar&rsquo;; // foo is now a string
              foo = true; // foo is now a boolean
            </p>
          </S.PostContent>
        </S.PostContainer>
      </S.ListOfPosts>
    </S.Container>
  )
}
