import { createContext } from "react";

export const PortfolioContext = createContext();

function PortfolioProvider({ children }) {

  const portfolio = {
    name: "Divyesh",
    role: "Frontend Developer",
    email: "dangard97@gmail.com",
    phone: "+91 9898365229",
    location: "Rajkot, Gujarat",
  };

  return (
    <PortfolioContext.Provider value={portfolio}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;