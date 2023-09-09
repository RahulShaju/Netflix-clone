import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import { auth } from "./utils/firebaseConfig";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";

function App() {
  
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
