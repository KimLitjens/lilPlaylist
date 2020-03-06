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
          song: "mooie",
          artist: "henk",
          genre: "jazz",
          rating: "4"
        },
        {
          id: 2,
          song: "hometown",
          artist: "snelle",
          genre: "jazz",
          rating: "4"
        },
        {
          id: 3,
          song: "rood",
          artist: "marco borsato",
          genre: "jazz",
          rating: "4"
        },
        {
          id: 4,
          song: "winter",
          artist: "u2",
          genre: "jazz",
          rating: "4"
        },
        {
          id: 5,
          song: "alles zusammen",
          artist: "sido",
          genre: "jazz",
          rating: "4"
        },
        {
          id: 6,
          song: "this song",
          artist: "seed",
          genre: "jazz",
          rating: "4"
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
                <th className="song-row__item">Genre</th>
                <th className="song-row__item">Rating</th>
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
