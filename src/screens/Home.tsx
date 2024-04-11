import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { fetchEnergiExchangeAssets } from "../api/energiSwap";
import { Asset } from "../types/index";

const Home: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAssets = async () => {
      try {
        setLoading(true);
        const assetsData = await fetchEnergiExchangeAssets();
        setAssets(assetsData);
      } catch (error) {
        console.error("Failed to fetch assets:", error);
      } finally {
        setLoading(false);
      }
    };

    getAssets();
  }, []);


  return (
    <div
      style={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!loading && assets.length > 0 ? (
        <Table assets={assets} />
      ) : (
        <div style={{marginTop: '5rem'}}>Loading..</div>
      )
      }
    </div>
  );
};

export default Home;
