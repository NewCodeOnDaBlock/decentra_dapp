import styled from "styled-components";

export const StyledTable = styled.table`
  width: 50%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 1px 1px 20px #383838;
`;

export const StyledThead = styled.thead`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

export const StyledTh = styled.th`
  padding: 12px 15px;
  &:hover {
    cursor: pointer;
    background-color: #00795f;
  }
`;

export const StyledTbody = styled.tbody`
  tr {
    border-bottom: 1px solid #dddddd;
  }
  /* tr:nth-of-type(even) {
    background-color: #f3f3f3;
  } */
  tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  tr:hover {
    background-color: #212121;
    color: white;
    cursor: default;
  }
`;

export const StyledTd = styled.td`
  padding: 12px 15px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #363740; // This is the color from your screenshot
  color: white;
`;