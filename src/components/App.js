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

  const [resultCard, setResultCard] = useState({});
  const [openDesign, setOpenDesign] = useState(true);
  const [openFill, setOpenFill] = useState(false);
  const [openShare, setOpenShare] = useState(false);

  //Avatar
  const updateAvatar = (avatar) => {
    console.log(avatar);
    setDataCard({ ...dataCard, photo: avatar });
  };
  //Manejadoras

  const handleInput = (inputValue, inputName) => {
    setDataCard({ ...dataCard, [inputName]: inputValue });
  };

  const collapsable = () => {
    if (openDesign === true && (openFill === true || openShare === true)) {
      setOpenFill(false)
      setOpenShare(false)
    }
    else if (openFill === true && (openDesign === true || openShare === true)) {
      setOpenDesign(false)
      setOpenShare(false)
    }
    else if (openShare === true && (openFill === true || openDesign === true)) {
      setOpenDesign(false)
      setOpenFill(false)
    }
  };

  // localStorage
  useEffect(() => {
    localStorage.set("userData", dataCard);
  }, [dataCard]);

  //fetch
  /*useEffect(() => {
    getData().then((dataFromApi) => {
      setResultCard(dataFromApi);
    });
  }, []);*/

  const handleShare = (dataFromApi) => {
    setResultCard(dataFromApi);
  };

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
                handleShare={handleShare}
                openDesign={openDesign} setOpenDesign={setOpenDesign}
                openFill={openFill} setOpenFill={setOpenFill}
                openShare={openShare} setOpenShare={setOpenShare}
                collapsable={collapsable}
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
