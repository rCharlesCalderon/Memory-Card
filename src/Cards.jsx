import { useState, useEffect } from "react";
import "./Cards.css";
function Cards({ skins, setSkins, score, setScore, setBestScore, bestScore }) {
  function shuffleCards() {
    console.log(skins, "before");
    let shuffledCards = skins.sort(() => Math.random() - 0.5);
    setSkins([...shuffledCards]);
    console.log(skins, "after");
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
    incrementScore(skin);
    markCard(skin);
    checkCard(skin);
  }

  return (
    <div className="card-container">
      {skins.map((skin, index) => {
        return (
          <div key={index} className="card" onClick={() => handleGame(skin)}>
            <img src={skin.displayIcon}></img>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
