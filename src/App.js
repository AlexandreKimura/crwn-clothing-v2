import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./routes/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
