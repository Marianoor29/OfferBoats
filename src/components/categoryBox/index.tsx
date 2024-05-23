import React from 'react';
import { View, Text, TextProps, Image } from 'react-native';
import styles from './styles';

type textProps = {
  categoryName?: string,
  source?: string,
  numberOfItems?: string,
};

const CategoryBox = ({ source, categoryName, numberOfItems }: textProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: source }} style={styles.posterImage} />
      <Text style={styles.categoryNameStyle} numberOfLines={1}>
        {categoryName}
      </Text>
      <Text style={styles.numberOfItemsStyle} numberOfLines={1}>
        {numberOfItems}
      </Text>
    </View>
  );
};

export default CategoryBox;
