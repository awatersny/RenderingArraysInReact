export default function Score({date, score}: {date: string, score: number}) {
  return (
    <div className='score'>
      <em className="date">{`${date.slice(5)}-${date.slice(0, 4)}`}</em>
      <div><b>Score: </b>{score}</div>
      
    </div>
  )
}
