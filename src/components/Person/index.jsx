import { PersonContainer } from './styles'

export function Person({ name, age, img }) {
  return (
    <PersonContainer>
      <img src={img} alt={name} />

      <div className='content'>
        <h2>{name}</h2>
        <p>{age} years old</p>
      </div>
    </PersonContainer>
  )
}
