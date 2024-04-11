export interface Asset {
  address: string;
  name: string;
  symbol: string;
  lastPrice: number;
}

export interface ApiAssetDetails {
  name: string;
  symbol: string;
  last_price: number;
  maker_fee: number;
  taker_fee: number;
}