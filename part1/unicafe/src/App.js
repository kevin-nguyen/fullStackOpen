import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (choice) => {
    return () => {
      if (choice === 'good') {
        setGood(good + 1)
      } else if (choice === 'neutral') {
        setNeutral(neutral + 1);
      } else if (choice === 'bad') {
        setBad(bad + 1)
      }
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackButton buttonName="good" onClick={handleClick('good')}/>
      <FeedbackButton buttonName="neutral" onClick={handleClick('neutral')} />
      <FeedbackButton buttonName="bad" onClick={handleClick('bad')} />
      <h1>statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const FeedbackButton = (props) => {

  return (
    <button type='button' onClick={props.onClick}>
      {props.buttonName}
    </button>
  )
}

const Stats = ({good, neutral, bad}) => {
  let sum = good + neutral + bad;

  if (sum == 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <Score choice='good' choiceScore={good} />
      <Score choice='neutral' choiceScore={neutral} />
      <Score choice='bad' choiceScore={bad} />
      <Score choice="total" choiceScore={good+neutral+bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Score = ({choice, choiceScore}) => <p>{choice + ': ' + choiceScore}</p>

const Average = ({good, neutral, bad}) => {
  let goodPoint = 1
  let neutralPoint = 0
  let badPoint = -1
  let sum = good + neutral + bad
  let avg = (good * goodPoint + neutral * neutralPoint + bad * badPoint) / sum 

  return <p>{'average: ' + avg}</p>
}

const Positive = ({good, neutral, bad}) => {
  let sum = good + neutral + bad;
  let goodRatio = good / sum * 100

  return <p>{'positive: ' + goodRatio + '%'}</p>
}

export default App;
