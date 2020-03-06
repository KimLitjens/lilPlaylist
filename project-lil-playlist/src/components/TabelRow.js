import React from "react";

const TabelRow = ({ item }) => {
  return (
    <tr key={item.id} className="tableRow">
      <td>{item.song}</td>
      <td>{item.artist}</td>
      <td>{item.genre}</td>
      <td>{item.rating}</td>
    </tr>
  );
};

export default TabelRow;
