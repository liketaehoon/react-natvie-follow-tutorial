import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  // other tutorial teach you using constructor and other ways but basically it's do same things.
  state = { albums: [] }; // step1.

  // L35
  // step1. initial (or default) state using class level properties.
  // step2. fetching data and update state
  // step3. adopting state

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data })); // step2.
    // setState is already implemented for Class based Component
    // we never use this.state = blahblah; statement. we'll talke about it later
  }

  render() {
    console.log(this.state); // will log twice , empty and full data
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
