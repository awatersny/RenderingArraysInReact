import React from 'react'
import Score from './Score'

export default function Learner({name, bio, scores}) {
  return (
    <div>
      <div><b>Name:</b>{name}</div>
      <div><b>Bio:</b>{bio}</div>
      <div><b>Scores:</b>{scores.map(s => <Score
        score={s.score}
        date={s.date}
      />)}</div>
      <br />
    </div>
  )
}
