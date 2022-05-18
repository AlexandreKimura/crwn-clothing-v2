import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation";
import Home from "./routes/home/home";
import Authentication from "./routes/authenticate";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";
import { useEffect } from "react";

import { setCurrentUser } from "./store/user/userAction";
import { useDispatch } from "react-redux";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase";

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log('user', user)
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubscribe
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
