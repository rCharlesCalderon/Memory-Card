import { useState } from "react";
import "./Cards.css";
function Cards({ skins, setSkins }) {
  function shuffleCards() {
    let shuffledCards = skins.sort(() => Math.random() - 0.5);
    setSkins([...shuffledCards]);
  }
  function handleGame(skin) {
    shuffleCards();
    //FIND INDEX OF THE OBJ
    //MARKED IT COMPLETE BUT MAKE SURE TO LITERALLY MAKE THE LITERAL
    let findSkinIndex = skins.findIndex((obj) => obj.uuid === skin.uuid);
    let markClicked = { ...skins[findSkinIndex], clicked: true };
    let updatedSkins = [...skins];
    updatedSkins[findSkinIndex] = markClicked;
    setSkins(updatedSkins);
    console.log(skins);
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
