import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;

  section {
    flex: 1;

    main {
      overflow: scroll;
    }
  }

  @media (max-width: 1440px) {
    padding-bottom: 7rem;
  }
`
