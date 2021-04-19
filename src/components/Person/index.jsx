import { PersonContainer } from './styles'

export function Person({ personDetails }) {
  return (
    <PersonContainer>
      <img src={personDetails.img} alt={personDetails.name} />

      <div className='content'>
        <h2>{personDetails.name}</h2>
        <p>{personDetails.age} years old</p>
      </div>
    </PersonContainer>
  )
}
