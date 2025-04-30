export default function Score({date, score}: {date: string, score: number}) {
  return (
    <div className='score'>
      <div><b>Score: </b>{score}</div>
      <em>{date}</em>
    </div>
  )
}
