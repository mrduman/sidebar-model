import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, toggleIsSidebarOpen] = useState(false);
  const [isModalOpen, toggleIsModalOpen] = useState(false);

  const handleOpenSidebar = () => {
    toggleIsSidebarOpen(true);
  };
  const handleCloseSidebar = () => {
    toggleIsSidebarOpen(false);
  };

  const handleOpenModal = () => {
    toggleIsModalOpen(true);
  };
  const handleCloseModal = () => {
    toggleIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        handleOpenModal,
        handleCloseModal,
        handleOpenSidebar,
        handleCloseSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
