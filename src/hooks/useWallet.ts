import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export interface WalletDetails {
  isConnected: boolean;
  address?: string;
  balance?: string;
  shortAddr?: string;
}

export const useWallet = () => {
  const [walletDetails, setWalletDetails] = useState<WalletDetails>({
    isConnected: false,
  });


  useEffect(() => {
    if (window.ethereum?.selectedAddress) {
      connectWallet();
    }
  }, []);


  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const balance = ethers.formatEther(
          await provider.getBalance("ethers.eth")
        );

        const shortAddr = await shortenAddress(address);
        setWalletDetails({
          isConnected: true,
          address,
          balance,
          shortAddr,
        });
      } catch (error) {
        console.error("An error occurred during wallet connection:", error);
      }
    } else {
      console.error("Ethereum object doesn't exist!");
    }
  };

  function shortenAddress(address: string, chars = 4) {
    if (!address) {
      return '';
    }
    const len = address.length;
    if (chars + 2 >= len) {
      return address;
    }
    return `${address.substring(0, chars + 2)}…${address.substring(len - chars)}`;
  }

  const disconnectWallet = () => {
    setWalletDetails({ isConnected: false });
  };

  return { connectWallet, disconnectWallet, walletDetails };
};
