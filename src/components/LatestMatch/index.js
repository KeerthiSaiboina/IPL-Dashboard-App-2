// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-logo-container">
          <div className="latest-match-details-1">
            <p className="latest-match-team-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest-match ${competingTeam}`}
            className="team-logo"
          />
        </div>
        <hr className="separator" />
        <div className="latest-match-details-2">
          <p className="details-label">First Innings</p>
          <p className="details-value">{firstInnings}</p>
          <p className="details-label">Second Innings</p>
          <p className="details-value">{secondInnings}</p>
          <p className="details-label">Man Of The Match</p>
          <p className="details-value">{manOfTheMatch}</p>
          <p className="details-label">Umpires</p>
          <p className="details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
