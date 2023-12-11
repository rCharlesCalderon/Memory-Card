import { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import Header from "./Header.jsx";
import "./App.css";

function App() {
  const [skins, setSkins] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function modifyData(response) {
    let modifidedObject = response.data.filter((obj) => {
      return (
        obj.displayName.includes("Gekko") ||
        obj.displayName.includes("Omen") ||
        obj.displayName.includes("Cypher") ||
        obj.displayName.includes("Viper") ||
        obj.displayName.includes("Astra") ||
        obj.displayName.includes("Killjoy") ||
        obj.displayName.includes("Jett") ||
        obj.displayName.includes("Kayo") ||
        obj.displayName.includes("Sage") ||
        obj.displayName.includes("Deadlock") ||
        obj.displayName.includes("Iso") ||
        obj.displayName.includes("Phoenix") ||
        obj.displayName.includes("Skye")
        //INCLDUE ONE MORE
      );
    });
    modifidedObject.map((obj) => {
      obj.clicked = false;
    });
    setSkins([...modifidedObject]);
    console.log(modifidedObject);
  }
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents", {
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
