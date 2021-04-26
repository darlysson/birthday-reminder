import { useState } from 'react'

import styled from 'styled-components'

import { Person } from './components/Person'
import { GlobalStyle } from './styles/global'
import { data } from './data'

const Container = styled.div`
  max-width: 500px;
  margin: 2.5rem auto;
  padding: 1.5rem 2rem;
  background: #fff;
`
const Button = styled.button`
  width: 100%;
  border: none;
  background: #f28ab2;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  height: 3rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 1.5rem;
`
const Heading = styled.h3`
  padding-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #102a42;
  font-weight: normal;

  span {
    color: #f28ab2;
    font-weight: bold;
  }
`

function App() {
  const [birthday, setBirthday] = useState(data)

  function handleClearAllBirthdays() {
    setBirthday(0)
  }

  function handleShowAllBirthdays() {
    setBirthday(data)
  }

  return (
    <Container>
      {birthday !== 0 ? (
        <>
          <Heading>
            <h4>
              <span>{birthday.length}</span> birthdays today. 🎂🎉
            </h4>
          </Heading>

          {data.map((person) => {
            return <Person key={person.id} {...person} />
          })}

          <Button onClick={() => handleClearAllBirthdays()}>Clear All</Button>
        </>
      ) : (
        <>
          <Heading>
            <h4>You have no birthdays today. 🤷‍♀️</h4>
          </Heading>

          <Button onClick={() => handleShowAllBirthdays()}>Show All</Button>
        </>
      )}

      <GlobalStyle />
    </Container>
  )
}

export default App
