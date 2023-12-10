import { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import Header from "./Header.jsx";
import "./App.css";

function App() {
  const [skins, setSkins] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function modifyData(response) {
    let modifiedData = response.data.filter((skin) => {
      return (
        (skin.assetPath.includes("Melee") &&
          skin.displayName.includes("Personal Administrative Melee Unit")) ||
        skin.displayName.includes("Champions 2022 Butterfly Knife") ||
        skin.displayName.includes("VCT LOCK//IN Misericórdia") ||
        skin.displayName.includes("Ruyi Staff") ||
        skin.displayName.includes("Winterwunderland Candy Cane")
      );
    });
    modifiedData.map((obj) => {
      obj.clicked = false;
    });

    setSkins([...modifiedData]);
  }
  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons/skins", {
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        modifyData(response);
      });
  }, []);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Cards
        skins={skins}
        setSkins={setSkins}
        setScore={setScore}
        score={score}
        setBestScore={setBestScore}
        bestScore={bestScore}
      />
    </>
  );
}

export default App;
