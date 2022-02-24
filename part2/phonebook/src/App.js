import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let inPhonebook = persons.find((person) => person.name === newName)
    
    if (inPhonebook === undefined) {
      setPersons([...persons, {name: newName, number: newNumber}])
    } else {
      alert(newName + ' is already in the phonebook')
    }
    
    setNewName('')
    setNewNumber('')
  }

  const displayNames = (persons) => {
    let displayList = persons.filter(person => {
      return person.name.toLowerCase().startsWith(filterName.toLowerCase(), 0)
    }) 
    
    return displayList.map(person => <Person key={person.name} name={person.name} number={person.number} />)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterName} onChange={handleFilterName} />
      <h2>Add Contact</h2>
      <PersonForm nameValue={newName} 
                  numberValue={newNumber} 
                  handleNameInput={handleNameInput} 
                  handleNumberInput={handleNumberInput} 
                  handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <table>
        <tbody>
          {displayNames(persons)}
        </tbody>
      </table>
    </div>
  )
}

const Filter = (props) => {
  return (
    <>
    Search: <input value={props.value} onChange={props.onChange} />
    </>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        name: <input value={props.nameValue} onChange={props.handleNameInput} />
      </div>
      <div>
        number: <input value={props.numberValue} onChange={props.handleNumberInput} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Person = (props) => {
  return (
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        {props.number}
      </td>
    </tr>
  )
}

export default App;
