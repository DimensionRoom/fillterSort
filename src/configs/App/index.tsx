
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useState } from "react";
import "./App.css";
import RenderRoute from "../../routes";

const App: React.FC = () => {
  const [userData, setUserData] = useState([]);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter basename="">
        <>
          <RenderRoute />
          {/* <div className="versionNumber">
         © 2022 by Tada Samngamthong
        </div> */}
        </>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
