import React from 'react'

export default function Score({date, score}) {
  return (
    <div>
      <span><b>Score: </b>{score} on <em>{date}</em></span>
    </div>
  )
}
