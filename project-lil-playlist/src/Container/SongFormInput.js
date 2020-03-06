import React from "react";

class SongFormInput extends React.Component {
  constructor() {
    super();
    this.state = {
      song: "",
      artist: "",
      genre: "",
      rating: ""
    };
  }
  render() {
    const onInput = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    const onSubmit = event => {
      console.log(this.state);
      event.preventDefault();
      this.props.addSong(this.state);
      this.setState({
        song: "",
        artist: "",
        genre: "",
        rating: ""
      });
    };
    return (
      <div className="SongForm">
        <form onSubmit={onSubmit}>
          <input
            name="song"
            value={this.state.song}
            onChange={onInput}
            placeholder="Song"
          />
          <input
            name="artist"
            value={this.state.artist}
            onChange={onInput}
            placeholder="Artist"
          />
          <select value={this.state.genre} onChange={onInput} name="genre">
            <option value="genre">-- choose genre -- </option>
            <option value="Rock">Rock</option>
            <option value="Jazz">Jazz</option>
            <option value="Hiphop">Hiphop</option>
            <option value="Classic">Classic</option>
          </select>
          <select name="rating" onChange={onInput} value={this.state.rating}>
            <option value="rating">-- rating --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input className="button-primary" type="submit" />
        </form>
      </div>
    );
  }
}
export default SongFormInput;
