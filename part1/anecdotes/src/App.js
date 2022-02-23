import {useState} from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]  

  let votesDefault = []
  for (let i = 0; i < anecdotes.length; i++) {
    votesDefault.push(0)
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votesDefault)

  const handleClick = () => {
    let val = Math.floor(Math.random()* anecdotes.length)
    setSelected(val)
  }

  const handleVote = () => {
    let votesCopy = [...votes]
    votesCopy[selected] += 1

    setVotes(votesCopy)
  }

  const topAnecdote = (quotes) => {
    let highestVote = 0;
    let votedAnecdote = null;
    
    for (let i = 0; i < quotes.length; i++) {
      highestVote = (votes[i] > highestVote) ? votes[i] : highestVote;
    }
    votedAnecdote = quotes[votes.indexOf(highestVote)]
    console.log(votedAnecdote)

    return {anecdote: votedAnecdote, votes: highestVote}
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{"votes: " + votes[selected]}</p>
      <VoteButton onClick={handleVote} />
      <Button onClick={handleClick} />
      <h1>Anecdote with the most votes</h1>
      <TopAnecdote bestAnecdote={() => topAnecdote(anecdotes)} />
    </div>
  )
}

const Button = (props) => <button onClick={props.onClick}>Next Anecdote</button>
const VoteButton = (props) => <button onClick={props.onClick}>vote</button>
const TopAnecdote = (props) => {
  let {anecdote, votes} = props.bestAnecdote()
  return (
    <p>
      {anecdote }
      <br />
      {"votes: " + votes}
    </p>
  )
}


export default App;
