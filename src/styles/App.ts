import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;

  section {
    flex: 1;
    width: 100%;

    main {
      height: calc(100vh - 6.5rem);
      overflow-y: scroll;

      ::-webkit-scrollbar {
        width: 7px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: var(--purple-300);
        border-radius: 0.3rem;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: var(--purple-400);
      }
    }
  }

  @media (max-width: 1440px) {
    main {
      ::-webkit-scrollbar-track {
        margin-bottom: 7.5rem;
      }
    }
  }
`
