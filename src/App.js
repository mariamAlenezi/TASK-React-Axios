import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import instance from "./api";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllPets } from "./api/pets";

function App() {
  const [pets, setPets] = useState([]);
  const callAPI = async () => {
    const res = await getAllPets();
    setPets(res);
    console.log(res);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="font-mono">
      <Navbar />
      {/* <Home /> */}
      {/* <PetList />
      <PetDetail /> */}

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/pets" Component={PetList} />
        <Route path="/pets/:petId" Component={PetDetail} />
      </Routes>
    </div>
  );
}

export default App;
