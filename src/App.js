import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation";
import Home from "./routes/home/home";
import Authentication from "./routes/authenticate";
import Shop from "./routes/shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path="/" element={<Home />} />
        <Route index path="/shop" element={<Shop />} />
        <Route index path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
