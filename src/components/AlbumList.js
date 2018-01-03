import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ albums: responseJson})
      console.log(this.state.albums);
    })
  }


  render() {

    // albums = this.state.albums.map(album () => {
    //     <Album
    //       title = {album.title}
    //       artist = {album.artist}
    //       albumImage = {album.image}
    //       artistImage = {album.thumbnail_image}
    //       url = {album.url}
    //     />
    // })

    return (
      <View>
        <Text>albums</Text>
      </View>
    );
  }
}


export default AlbumList;
