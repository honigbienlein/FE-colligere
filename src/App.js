import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Collections from "./Components/Collections";
import Collection from "./Components/Collection";
import Menu from "./Components/Menu";
import Sign from "./Components/Sign";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Item from "./Components/Item";
import Settings from "./Components/Settings";
import Scan from "./Components/Scan";
import AddItem from "./Components/AddItem";
import { useState } from "react";

export default function App() {
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    console.log("app,js");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Sign />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signin />} />
      </Route>
      <Route path="/collections" element={<Collections />} />
      <Route
        path="/collections/:collectionId"
        element={<Collection setScannedData={setScannedData} />}
      />
      <Route path="/collections/:collectionId/:itemId" element={<Item />} />
      <Route path="/settings" element={<Settings />}></Route>
      <Route
        path="/collectionts/:collectionId/addItem"
        element={<AddItem scannedData={scannedData} />}
      ></Route>
    </Routes>
  );
}
