import React from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import styled from "styled-components";

const ToggleRoutes: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  const goToWallet = () => {
    navigate("/wallet");
  };

  const NavLink = styled.span`
    width: 100px;
    height: 80px;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;

    &:hover::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: #009879;
    }
  `;

  return (
    <>
      <NavLink onClick={goHome}>
        <IoHomeOutline />
        Home
      </NavLink>
      <NavLink onClick={goToWallet}>
        <IoWalletOutline />
        Wallet
      </NavLink>
    </>
  );
};

export default ToggleRoutes;
