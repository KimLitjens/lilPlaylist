import React from "react";
import SongFormInput from "./Container/SongFormInput";
import SongFormList from "./Container/SongFormList";

class songOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          song: "Bohemian Rhapsody",
          artist: "queen",
          genre: "Rock",
          rating: "4"
        },
        {
          id: 2,
          song: "hometown",
          artist: "snelle",
          genre: "Pop",
          rating: "3"
        },
        {
          id: 3,
          song: "Sultans Of Swing",
          artist: "Dire Straits",
          genre: "Pop",
          rating: "4"
        },
        {
          id: 4,
          song: "Smells Like Teen Spirit",
          artist: "Nirvana",
          genre: "jazz",
          rating: "5"
        },
        {
          id: 5,
          song: "Hurra die Welt geht unter ft. Henning May",
          artist: "K.I.Z.",
          genre: "Pop",
          rating: "4"
        },
        {
          id: 6,
          song: "Roxanne",
          artist: "AnnenMayKantereit x Milky Chance",
          genre: "Pop",
          rating: "5"
        }
      ]
    };
  }

  render() {
    const addSong = song => {
      const item = {
        id: this.state.songs.length + 1,
        song: song.song,
        artist: song.artist,
        genre: song.genre,
        rating: song.rating
      };
      this.setState({ songs: this.state.songs.concat(item) });
    };
    const sortBySong = () => {
      const currentState = this.state.songs;
      this.setState(currentState.sort((a, b) => a.song.localeCompare(b.song)));
    };
    const sortByArtist = () => {
      const currentState = this.state.songs;
      this.setState(
        currentState.sort((a, b) => a.artist.localeCompare(b.artist))
      );
    };
    const sortByGenre = () => {
      const currentState = this.state.songs;
      this.setState(
        currentState.sort((a, b) => a.genre.localeCompare(b.genre))
      );
    };
    const sortByRating = () => {
      const currentState = this.state.songs;
      this.setState(
        currentState.sort((b, a) => a.rating.localeCompare(b.rating))
      );
    };
    return (
      <div>
        <div>
          <SongFormInput addSong={addSong} />
        </div>
        <div>
          <table style={{ width: "100%" }} className="headerBar">
            <thead className="tableHead">
              <tr>
                <th className="song-row__item">
                  <button onClick={sortBySong}>Song</button>
                </th>
                <th className="song-row__item">
                  <button onClick={sortByArtist}>Artist</button>
                </th>
                <th className="song-row__item">
                  <button onClick={sortByGenre}>Genre</button>
                </th>
                <th className="song-row__item">
                  <button onClick={sortByRating}>rating</button>
                </th>
              </tr>
            </thead>
            <SongFormList songList={this.state.songs} />
          </table>
        </div>
        {console.log("array lengt is: " + this.state.songs.length)}
        {console.log("array is: " + this.state.songs)}
        {console.log("add song: " + addSong)}
      </div>
    );
  }
}

export default songOverview;
