import styled from 'styled-components'

export const PersonContainer = styled.section`
  display: flex;
  align-items: center;

  & + section {
    margin-top: 1.5rem;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  div.content {
    padding-left: 1rem;

    h2 {
      font-size: 1.2rem;
      font-weight: bold;
      color: #102a42;
      padding-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: #777;
    }
  }
`
