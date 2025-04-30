import Score from './Score'

interface ScoreProps {
  date: string,
  score: number
}

interface LearnerProps {
  name: string, 
  bio: string, 
  scores: ScoreProps[]
}

export default function Learner({name, bio, scores}: LearnerProps) {
  return (
    <div className="learner">
      <div className='info'><b>Name: </b>{name}</div>
      <div className='info'><b>Bio: </b>{bio}</div>
      <div className='info'><b>Scores:</b>{scores.map((score, idx) => 
        <Score
          key={idx}
          score={score.score}
          date={score.date}
        />)}
      </div>
      <br />
    </div>
  )
}
