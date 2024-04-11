import axios from "axios";
import { Asset, ApiAssetDetails } from "../types/index";
import { ethers } from "ethers";

export const fetchEnergiExchangeAssets = async (): Promise<Asset[]> => {
  const response = await axios.get<{ [key: string]: ApiAssetDetails }>(
    "https://api.energiswap.exchange/v1/assets"
  );
  const assetsArray = Object.entries(response.data).map(
    ([address, assetDetails]): Asset => {
      return {
        address,
        name: assetDetails.name,
        symbol: assetDetails.symbol,
        lastPrice: assetDetails.last_price,
      };
    }
  );
  return assetsArray;
};

export const formatPrice = async (ethAmount: string): Promise<string> => {
  const assets = await fetchEnergiExchangeAssets();
  const ethAsset = assets.find((asset) => asset.symbol === "ETH");
  if (!ethAsset) throw new Error("ETH price not found");

  const ethPriceInUSD = ethAsset.lastPrice; // This assumes `lastPrice` is a string in USD
  const amountInWei = ethers.parseEther(ethAmount);
  const ethAmountInUSD =
    Number(ethers.formatUnits(amountInWei, "ether")) *
    Number(ethPriceInUSD);
  return ethAmountInUSD.toFixed(2);
}
