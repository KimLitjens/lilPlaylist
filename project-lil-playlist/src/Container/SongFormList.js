import React from "react";
import Tabelrow from "./../components/TabelRow";

class SongFormList extends React.Component {
  render() {
    const items = this.props.songList;
    console.log(items);
    const rowItems = items
      ? items.map(item => <Tabelrow key={item.id} item={item} />)
      : " ";

    return (
      <>
        <tbody>{rowItems}</tbody>
      </>
    );
  }
}

export default SongFormList;
