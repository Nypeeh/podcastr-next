import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 2rem;

  table {
    width: 100%;

    th,
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }

    th {
      color: var(--gray-200);
      text-transform: uppercase;
      font: 500 0.75rem Lexend, sans-serif;
      text-align: left;
    }

    td {
      font-size: 0.875rem;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
      }

      a {
        color: ${({ theme }) => theme.colors.title};
        font-family: Lexend, sans-serif;
        font-weight: 600;
        text-decoration: none;
        line-height: 1.4rem;
        font-size: 1rem;

        :hover {
          text-decoration: underline;
        }
      }

      button {
        width: 2rem;
        height: 2rem;
        background: ${({ theme }) => theme.colors.background};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 0.5rem;
        font-size: 0;
        transition: filter 0.2s;

        :hover {
          filter: brightness(0.95);
        }

        img {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }
  }

  @media (max-width: 1440px) {
    padding-bottom: 12rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`
