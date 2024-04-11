import styled from "styled-components";

export const StyledWalletDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledConnectButton = styled.button`
  min-width: 300px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 30px;
  font-weight: 600;
  background-color: #00ab58;
  cursor: pointer;

  &:hover {
    background-color: #009879;
  }
`;
