import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import getData from "../services/fetch";
//Componentes
import GetAvatar from "./GetAvatar";
import Header from "./Header";
import CardPreview from "./CardPreview";
import Footer from "./Footer";
import Card from "./Card";
import Landing from "./Landing";

//LS
import localStorage from "../services/localStorage";

function App() {
  const [dataCard, setDataCard] = useState(
    localStorage.get("userData", {
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    })
  );
  //Avatar
  const [resultCard, setResultCard] = useState({});
  const updateAvatar = (avatar) => {
    console.log(avatar);
    setDataCard({ ...dataCard, photo: avatar });
  };
  //Manejadoras

  const handleInput = (inputValue, inputName) => {
    setDataCard({ ...dataCard, [inputName]: inputValue });
  };

  // localStorage
  useEffect(() => {
    localStorage.set("userData", dataCard);
  }, [dataCard]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Landing />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/card"
          element={
            <>
              <Header />

              <Card
                updateAvatar={updateAvatar}
                dataCard={dataCard}
                handleCreateCard={setResultCard}
                handleInput={handleInput}
                resultCard={resultCard}
                setDataCard={setDataCard}
              />

              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
