import React from 'react'

export default function Score({date, score}) {
  return (
    <div className='score'>
      <div><b>Score: </b>{score}</div>
      <em>{date}</em>
    </div>
  )
}
