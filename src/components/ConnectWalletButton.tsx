import React from "react";
import { StyledConnectButton } from "../styles/wallet.styles";

interface ConnectWalletButtonProps {
  connectWallet: () => void;
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  connectWallet,
}) => {
  return (
    <StyledConnectButton onClick={connectWallet}>
      Connect Wallet
    </StyledConnectButton>
  );
};
export default ConnectWalletButton;
