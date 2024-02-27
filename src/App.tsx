import "styles/global.scss";
import "./i18n";
import Home from "pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App(): JSX.Element {
  return (
    <div className="App">
      < BrowserRouter>
        <Routes>
          <Route index element={< Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
