export default function Score({date, score}: {date: string, score: number}) {
  return (
    <div className='score'>
      {`${date.slice(5)}-${date.slice(0, 4)}`}
      <div><b>Score: </b>{score}</div>
      
    </div>
  )
}
