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
