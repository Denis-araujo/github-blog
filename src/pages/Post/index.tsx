import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import ReactMarkdown from 'react-markdown'
import { differenceInBusinessDays } from 'date-fns'

import * as S from './styles'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

interface PostContent {
  title: string
  createdAt: string
  comments: number
  url: string
  content: string
  author: string
}

export function Post() {
  const { id } = useParams()
  const [postContent, setPostContent] = useState<PostContent>()

  const responsePostContent = useCallback(async () => {
    const response = await api.get(
      `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
    )

    const data = response.data

    setPostContent({
      title: data.title,
      createdAt: data.created_at,
      comments: data.comments,
      url: data.url,
      content: data.body,
      author: data.user.login,
    })
  }, [id])

  useEffect(() => {
    responsePostContent()
  }, [responsePostContent])

  return (
    <S.Container>
      <S.Header>
        <div>
          <a href="/">
            <CaretLeft size={18} weight="thin" />
            Voltar
          </a>
          <a href={postContent?.url}>
            Ver no GitHub <ArrowSquareOut size={18} weight="fill" />
          </a>
        </div>

        <S.Title>{postContent?.title}</S.Title>

        <div>
          <span>
            <GithubLogo size={18} weight="thin" />
            {postContent?.author}
          </span>
          <span>
            <CalendarBlank size={18} weight="thin" /> Há{' '}
            {differenceInBusinessDays(
              new Date(),
              new Date(postContent?.createdAt),
            )}{' '}
            dia
          </span>
          <span>
            <ChatCircle size={18} weight="fill" />
            {postContent?.comments} comentarios
          </span>
        </div>
      </S.Header>

      <S.PostContent>
        <ReactMarkdown>{postContent?.content}</ReactMarkdown>
      </S.PostContent>
    </S.Container>
  )
}
