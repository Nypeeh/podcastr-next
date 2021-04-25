import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.background};
  height: 6.5rem;

  display: flex;
  align-items: center;
  padding: 2rem 4rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }

  span {
    margin-left: auto;
    text-transform: capitalize;
  }

  @media (max-width: 700px) {
    p {
      display: none;
    }
  }

  @media (max-width: 450px) {
    justify-content: center;
    padding: 0rem 4%;

    span {
      display: none;
    }
  }
`

export const SwitchContainer = styled.div`
  margin-left: 2rem;
`
