import React, { useEffect, useState } from "react";
import { Asset } from "../types";
import {
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledThead,
} from "../styles/table.styles";

interface TableProps {
  assets: Asset[];
}

const Table: React.FC<TableProps> = ({ assets }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Asset;
    direction: "ascending" | "descending";
  } | null>(null);

  const sortedAssets = React.useMemo(() => {
    if (!sortConfig) {
      return assets;
    }

    return [...assets].sort((a, b) => {
      const key = sortConfig.key;
      const aValue = a[key];
      const bValue = b[key];

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }, [assets, sortConfig]);

  const requestSort = (key: keyof Asset) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getIconPath = (symbol: string): Promise<string | null> => {
    return import(`../styles/assets/icons/${symbol.toUpperCase()}.svg`)
      .then((module) => module.default)
      .catch(() => null);
  };

  const [iconPaths, setIconPaths] = useState<Record<string, string | null>>({});

  useEffect(() => {
    assets.forEach((asset) => {
      getIconPath(asset.symbol).then((path) => {
        setIconPaths((prevPaths) => ({
          ...prevPaths,
          [asset.symbol]: path,
        }));
      });
    });
  }, [assets]);

  const displayableAssets = assets.filter((asset) => iconPaths[asset.symbol]);

  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <StyledTh onClick={() => requestSort("name")}>Coin</StyledTh>
          <StyledTh onClick={() => requestSort("symbol")}>Symbol</StyledTh>
          <StyledTh onClick={() => requestSort("lastPrice")}>Price</StyledTh>
        </tr>
      </StyledThead>
      <StyledTbody>
        {sortedAssets
          .filter((asset) => displayableAssets.includes(asset))
          .map((asset) => (
            <tr key={asset.address}>
              <StyledTd>
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {iconPaths[asset.symbol] ? (
                    <img
                      src={iconPaths[asset.symbol] as string}
                      alt={`${asset.symbol} icon`}
                      style={{ width: "30px", height: "30px", padding: "8px" }}
                    />
                  ) : (
                    <span>No icon</span>
                  )}
                  {asset.name}
                </div>
              </StyledTd>
              <StyledTd>{asset.symbol}</StyledTd>
              <StyledTd>${asset.lastPrice.toFixed(2)}</StyledTd>
            </tr>
          ))}
      </StyledTbody>
    </StyledTable>
  );
};

export default Table;
