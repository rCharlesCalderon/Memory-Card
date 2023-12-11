import { useState, useEffect } from "react";
import "./Cards.css";
function Cards({ skins, setSkins, score, setScore, setBestScore, bestScore }) {
  function shuffleCards() {
    let shuffledCards = skins.sort(() => Math.random() - 0.5);
    setSkins([...shuffledCards]);
  }

  function markCard(skin) {
    let findSkinIndex = skins.findIndex((obj) => obj.uuid === skin.uuid);
    let markClicked = { ...skins[findSkinIndex], clicked: true };
    let updatedSkins = [...skins];
    updatedSkins[findSkinIndex] = markClicked;
    setSkins(updatedSkins);
  }

  function checkCard(skin) {
    if (skin.clicked === true) {
      let resetCards = skins.map((obj) => ({
        ...obj,
        clicked: false,
      }));
      setSkins(resetCards);
    }
    console.log(skins);
  }

  function incrementScore(skin) {
    if (skin.clicked === true) {
      if (score > bestScore) {
        bestScore = score;
        setBestScore(bestScore);
      }
      setScore(0);
    } else {
      setScore((score) => score + 1);
    }
  }
  function handleGame(skin) {
    //Literally Shuffles cards
    shuffleCards();
    //Scoreboard
    incrementScore(skin);
    //set card property clicked to true
    markCard(skin);
    //checks for validation of card
    checkCard(skin);
  }

  return (
    <div className="card-container">
      {skins.map((skin, index) => {
        return (
          //ADD STYLING TO THE CARD INSEAD OF IMG MAYBE?
          <div key={index} className="card" onClick={() => handleGame(skin)}>
            <img
              src={skin.fullPortrait}
              style={{
                backgroundImage: `url(${skin.background})`,
                backgroundColor: `#${skin.backgroundGradientColors[1]}`,
              }}
            ></img>
            <p>{skin.displayName}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
