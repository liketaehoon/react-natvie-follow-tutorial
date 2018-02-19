  import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  // teacher like this style.
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyles, textContainer } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyles}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={textContainer}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyles: {
    height: 50,
    width: 50,
  },
};

export default AlbumDetail;
