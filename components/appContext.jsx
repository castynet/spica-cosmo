import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export function useApp() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [homeView, setHomeView] = useState("intro");

  function switchHomeView() {
    if (homeView === "intro") {
      setHomeView("cards");
    } else setHomeView("intro");
  }

  return (
    <AppContext.Provider value={{ homeView, switchHomeView }}>
      {children}
    </AppContext.Provider>
  );
};
