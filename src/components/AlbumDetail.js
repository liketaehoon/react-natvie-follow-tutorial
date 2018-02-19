  import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => (
  <Card>
    <CardSection>
      <View>
      </View>
      <View style={styles.textContainer}>
        <Text>{props.album.title}</Text>
        <Text>{props.album.artist}</Text>
      </View>
    </CardSection>
  </Card>
);

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  }
};

export default AlbumDetail;
