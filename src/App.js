import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/screens/Home.tsx";
import Wallet from "../src/screens/Wallet.tsx";
import { ThemeProvider } from "../src/styles/ThemeToggle.tsx";
import ThemeToggle from "../src/components/ThemeToggle.tsx";
import ToggleRoutes from "../src/components/ToggleRoutes.tsx";
import styled from "styled-components";
import { Navigation } from "../src/styles/navigation.styles.ts";
import { useWallet } from "./hooks/useWallet";
import metamaskLogo from "../src/styles/assets/metamask.svg";

function App() {
  const { connectWallet, disconnectWallet, walletDetails } = useWallet();

  const ToggleWrap = styled.div`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    padding: 0.5rem 1rem;
  `;

  return (
    <ThemeProvider>
      <ToggleWrap>
        <Router>
          <Navigation>
            {walletDetails &&  (
              <>
                <img
                  src={metamaskLogo}
                  alt="metamask"
                  style={{ width: "20px", height: "20px" }}
                />
                {walletDetails.shortAddr}
              </>
            )}
            <ToggleRoutes />
            <ThemeToggle />
          </Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </Router>
      </ToggleWrap>
    </ThemeProvider>
  );
}

export default App;
