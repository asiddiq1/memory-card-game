import '../styles/header.css'



function ScoreBoard({score, highScore}) {
    return (
     <div className="scoreboard">
        <div className="score">Score: {score}</div>
        <div className="high-score">Highscore: {highScore}</div>
     </div>
    );
}

export default ScoreBoard;