import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { toogleSideBar, toogleModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={toogleSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={toogleModal}>
        Show Modals
      </button>
    </main>
  );
};

export default Home;
