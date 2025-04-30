import React from 'react'
import Score from './Score'

export default function Learner({name, bio, scores}) {
  return (
    <div className="learner">
      <div className='info'><b>Name: </b>{name}</div>
      <div className='info'><b>Bio: </b>{bio}</div>
      <div className='info'><b>Scores:</b>{scores.map(s => <Score
        score={s.score}
        date={s.date}
      />)}</div>
      <br />
    </div>
  )
}
