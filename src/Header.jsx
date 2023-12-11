import "./Header.css";
import valorantIcon from "./images/valorant.png";
function Header({ score, bestScore }) {
  return (
    <div className="header-container">
      <div className="header">
        <h1>
          <img src={valorantIcon}></img>Valorant Memory Game
        </h1>
        <p>
          Get points by clicking on an image but don't click the same one twice!
        </p>
      </div>
      <div className="scoreboard-container">
        <p>Score:{score}</p>
        <p>Best Score:{bestScore}</p>
      </div>
    </div>
  );
}

export default Header;
