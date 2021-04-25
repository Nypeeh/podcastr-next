import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  padding-bottom: 12rem;

  ul {
    list-style: none;

    li {
      width: 100%;
      background: ${({ theme }) => theme.colors.background};
      border: 1px solid ${({ theme }) => theme.colors.border};
      padding: 1.25rem;
      border-radius: 1.5rem;
      position: relative;

      display: flex;
      align-items: center;

      & + li {
        margin-top: 1rem;
      }

      img {
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;
      }

      button {
        position: absolute;
        right: 2rem;
        bottom: 2rem;
        width: 2.5rem;
        height: 2.5rem;
        background: ${({ theme }) => theme.colors.backgroundButton};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 0.675rem;
        font-size: 0;
        transition: filter 0.2s;

        :hover {
          filter: brightness(0.95);
        }

        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    display: block;
  }

  @media (max-width: 540px) {
    ul li {
      flex-direction: column;
      justify-content: center;

      button {
        margin-top: 1.5rem;
        position: static;
        width: 95%;
        max-width: 100px;
        height: 55px;

        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
`

export const EpisodeDetails = styled.div`
  flex: 1;
  margin-left: 1rem;

  a {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-family: Lexend, sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4rem;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.875rem;

    :last-child {
      margin-left: 0.5rem;
      padding-left: 0.5rem;
      position: relative;

      ::before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: #ddd;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  @media (max-width: 540px) {
    a {
      margin: 1rem 0;
    }

    p {
      max-width: 100%;
      white-space: initial;
      overflow: initial;
      text-overflow: initial;
    }
  }
`
