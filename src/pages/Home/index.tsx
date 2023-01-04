import { useEffect, useState, useCallback, ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { ProfileCard } from './ProfileCard'
import * as S from './styles'

import debounce from 'lodash.debounce'
import { differenceInBusinessDays } from 'date-fns'

type User = {
  name: string
  bio: string
  htmlUrl: string
  followers: number
  avatarUrl: string
}

type Posts = {
  title: string
  id: number
  createdAt: string
  body: string
}

export function Home() {
  const [user, setUser] = useState<User>()
  const [posts, setPosts] = useState<Posts[]>([])

  const postsSearch = useForm({
    defaultValues: {
      search: '',
    },
  })

  const { register, setValue } = postsSearch

  async function response() {
    const response = await api.get('Denis-araujo')
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

  const debounceFn = useCallback(debounce(handleDebounceFn, 500), [])

  async function handleDebounceFn(search: string) {
    const response = await api.get(
      `https://api.github.com/search/issues?q=${search}repo:rocketseat-education/reactjs-github-blog-challenge`,
    )

    const data = await response.data

    setPosts(
      data.items.map((post) => {
        return {
          id: post.id,
          title: post.title,
          body: post.body,
          createdAt: post.created_at,
        }
      }),
    )
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue('search', event.target.value)
    debounceFn(event.target.value)
  }

  useEffect(() => {
    handleDebounceFn('')
  }, [])

  console.log(posts)

  return (
    <S.Container>
      <header>
        <ProfileCard
          name={user?.name}
          avatarUrl={user?.avatarUrl}
          bio={user?.bio}
          followers={user?.followers}
          htmlUrl={user?.htmlUrl}
        />
      </header>

      <S.SearchForm>
        <div>
          <span>Publicações</span>
          <span>{posts.length} publicações</span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search', {
            onChange: handleChange,
          })}
        />
      </S.SearchForm>

      <S.ListOfPosts>
        {posts?.map((post) => {
          return (
            <S.PostContainer key={post.id} href={`post/${post.id}`}>
              <S.PostContent>
                <div>
                  <S.PostTitle>{post.title}</S.PostTitle>
                  <S.PostTime>
                    há{' '}
                    {differenceInBusinessDays(
                      new Date(),
                      new Date(post.createdAt),
                    )}{' '}
                    dias
                  </S.PostTime>
                </div>

                <p>{post.body}</p>
              </S.PostContent>
            </S.PostContainer>
          )
        })}
      </S.ListOfPosts>
    </S.Container>
  )
}
