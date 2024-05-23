import React from 'react';
import { View, Text, TextProps, Image } from 'react-native';
import styles from './styles';

type textProps = {
  artistName?: String,
  source?: any,
};

const PopularArtist = ({ source, artistName }: textProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.userImage} />
      </View>
      <Text style={styles.artistName} numberOfLines={1}>
        {artistName}
      </Text>
    </View>
  );
};

export default PopularArtist;
