import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RenderRoute from "../../routes";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="">
      <>
        <RenderRoute />
        <div className="versionNumber">
         © 2022 by Tada Samngamthong
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
