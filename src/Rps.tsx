import { useState } from "react"

function Rps() {
  const [round, setRound] = useState(1);
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("none");
  const [compChoice, setCompChoice] = useState("none");
  const [result, setResult] = useState("");

  const choices = ["rock", "paper", "scissors"];

  function choose(choice: string) {
    let newComp = choices[Math.floor(Math.random() * 3)];
    setCompChoice(newComp);
    if ((choice === "rock" && newComp === "scissors") ||
        (choice === "scissors" && newComp === "paper") ||
        (choice === "paper" && newComp === "rock")) {
      setResult("Player won!");
      setPlayerScore(playerScore + 1);
    }
    else if (choice === newComp) { setResult("Tie!"); }
    else {
      setResult("Computer won!");
      setCompScore(compScore + 1);
    }
    setRound(round + 1);
  }

  function reset() {
    setPlayerScore(0);
    setCompScore(0);
    setRound(1);
    setPlayerChoice("none");
    setCompChoice("none");
    setResult("");
  }

  return (
    <>
      <h1 className="title center">Rock, Paper, Scissors!</h1>
      <h2 className="center">Round: {round}</h2>
      <table className="center">
        <tr>
          <td className="rrect">
            <h3 className="center">Player</h3>
            <div className="row">
              <div className="column">
                <img src="images/rock.png" alt="" onClick={()=>choose("rock")}></img>
              </div>
              <div className="column">
                <img src="images/paper.png" alt="" onClick={()=>choose("paper")}></img>
              </div>
              <div className="column">
                <img src="images/scissors.png" alt="" onClick={()=>choose("scissors")}></img>
              </div>
            </div>
            <div className="center score">{playerScore}</div>
          </td>
          <td className="result">{result}</td>
          <td className="rrect">
            <h3 className="center">Computer</h3>
            <div className="row">
              <div className="column">
                <img src={"images/none.png"} alt=""></img>
              </div>
              <div className="column">
                <img src={"images/" + compChoice + ".png"} alt=""></img>
              </div>
              <div className="column">
              <img src={"images/none.png"} alt=""></img>
              </div>
            </div>
            <div className="center score">{compScore}</div>
          </td>
        </tr>
      </table>
      <div className="center">
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </>
  )
}


export default Rps;