import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 19rem;
  margin-top: -5rem;

  display: block;
`

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      color: ${(props) => props.theme.baseSubtitle};
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 160%;
    }

    span:last-child {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme.baseSpan};
    }
  }

  input {
    background: ${(props) => props.theme.baseInput};

    border: 1px solid ${(props) => props.theme.baseBorder};
    border-radius: 6px;

    color: ${(props) => props.theme.baseLabel};
    padding: 12px 16px;

    ::placeholder {
      color: ${(props) => props.theme.baseLabel};
    }
  }
`

export const ListOfPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2rem;

  margin-top: 3rem;
  margin-bottom: 1.5rem;
`

export const PostContainer = styled.div`
  width: calc((100vw - 40rem) / 2);
  height: 16.25rem;

  background: ${(props) => props.theme.basePost};
  border-radius: 10px;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding: 2rem;
  gap: 1.25rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme.baseText};
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 100px;

    display: -webkit-box;
    -webkit-line-clamp: 4; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }
`

export const PostTitle = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 160%;
  color: ${(props) => props.theme.baseTitle};
`

export const PostTime = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  white-space: nowrap;
  color: ${(props) => props.theme.baseSpan};
`
