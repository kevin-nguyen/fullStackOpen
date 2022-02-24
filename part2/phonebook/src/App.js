import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setPersons([...persons, {name: newName}])
    setNewName('')
  }

  const displayNames = (persons) => {
    return persons.map(person => <Person key={person.name} name={person.name} />)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit} >
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {displayNames(persons)}
        </tbody>
      </table>
    </div>
  )
}

const Person = (props) => {
  return (
    <tr>{props.name}</tr>
  )
}

export default App;
