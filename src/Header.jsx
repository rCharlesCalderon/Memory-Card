import "./Header.css";
function Header({ score, bestScore }) {
  return (
    <div className="header">
      <p>Score:{score}</p>
      <p>Best Score:{bestScore}</p>
    </div>
  );
}

export default Header;
