import { useState, useEffect } from 'react';
import { Asset } from '../types';
import { fetchEnergiExchangeAssets } from '../api/energiSwap';

export const useEnergiswapAssets = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const fetchedAssets = await fetchEnergiExchangeAssets();
        setAssets(fetchedAssets);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadAssets();
  }, []);

  return { assets, loading };
};