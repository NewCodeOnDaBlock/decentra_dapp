import React, { useEffect, useState } from "react";
import { useWallet } from "../hooks/useWallet";
import metamaskLogo from "../styles/assets/metamask.svg";
import ConnectWalletButton from "../components/ConnectWalletButton";
import { StyledConnectButton, StyledWalletDiv } from "../styles/wallet.styles";
import { ConnectedStatus } from "../components/ConnectionStatus";
import { formatPrice } from "../api/energiSwap";

const Wallet: React.FC = () => {
  const { connectWallet, disconnectWallet, walletDetails } = useWallet();
  const [formattedPriceToUsd, setFormattedPriceToUsd] = useState<string>("");

  useEffect(() => {
    if (walletDetails.balance) {
      formatPrice(walletDetails.balance)
        .then((usdPrice) => {
          setFormattedPriceToUsd(usdPrice);
          console.log(`The price in USD is: $${usdPrice}`);
        })
        .catch((error) => {
          console.error("Error formatting price:", error);
        });
    }
  }, [walletDetails.balance]);

  return (
    <StyledWalletDiv>
      {walletDetails.isConnected ? (
        <>
          <p style={{fontWeight: '600', fontSize: '24px'}}>Total Balance:</p>
          <p>
            {walletDetails.balance} <b>ETH</b>
          </p>
          <p>
            ${formattedPriceToUsd} <b>USD</b>
          </p>
          <StyledConnectButton onClick={disconnectWallet}>
            Disconnect Wallet
          </StyledConnectButton>
          <ConnectedStatus isConnected={walletDetails.isConnected} />
        </>
      ) : (
        <>
          <img
            src={metamaskLogo}
            alt="metamask"
            style={{ width: "200px", height: "200px" }}
          />
          <ConnectWalletButton connectWallet={connectWallet} />
          <ConnectedStatus isConnected={walletDetails.isConnected} />
        </>
      )}
    </StyledWalletDiv>
  );
};

export default Wallet;
