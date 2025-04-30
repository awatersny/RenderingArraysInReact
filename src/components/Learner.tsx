import React from 'react'

export default function Learner({name, bio, scores}) {
  return (
    <div>
      <div><b>Name:</b>{name}</div>
      <div><b>Bio:</b>{bio}</div>
      <div><b>Scores:</b>{scores}</div>
      <br />
    </div>
  )
}
