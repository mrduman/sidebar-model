import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  const data = useContext(AppContext);
  const { handleOpenSidebar, handleOpenModal } = data;

  return (
    <main>
      <button onClick={handleOpenSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={handleOpenModal} className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
