import React from "react";
import { View, Text, TextProps, Image } from 'react-native';
import styles from "./styles";
import Button from "../button";

type textProps = {
    title?: String | number
    price?: String | number,
    uri?: string
}

const GalleryCard = ({
    title,
    price,
    uri,
}: textProps) => {
    return (
        <View style={styles.container}>
             <Image
            source={{
              uri: uri,
            }}
            style={styles.coverImageStyle}
          />
          <View style={styles.detailView}>
          <Text style={styles.text} numberOfLines={1}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
          <Button text='Buy Now' buttonStyle={styles.editButtonStyle} textStyle={styles.editButtonText}/>

          </View>
        </View>
    )
}

export default GalleryCard;