import React from "react";
import { Image, Pressable, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { LargeText, SmallText } from "../text";
import styles from "./styles";
import { width } from "../../utils/Dimension";

type textProps = {
    title?: string,
    source?: string,
    boatOwnerImage?: string,
    price?: number,
    backgroundColor?: string,
    members?: number,
    duration?: number,
    onPress?: () => void,
    description?: string,
    images: string[]

}

const OfferCard = ({
    source,
    boatOwnerImage,
    title,
    price,
    members,
    duration,
    description,
    images,
    onPress = () => null
}: textProps) => {
    return (
        <View style={styles.container}>
             <Carousel
      width={width(94)}
      height={width(50)}
      data={images}
      renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.slide} />
       )}  loop autoPlay autoPlayInterval={3000}/>
            {/* //  <Image source={{uri: source}} style={styles.posterImage}/> */}
             <Pressable style={styles.membersbtnStyle}>
                <SmallText textStyles={styles.membersbtnTextStyle}>{members} members</SmallText>
             </Pressable>
             <View style={styles.innerView}>
             <Image source={{uri: boatOwnerImage}} style={styles.boatOwnerImage}/>
             <View>
            <LargeText textStyles={styles.titleStyle} numberOfLines={1}>{title}</LargeText>
            <SmallText textStyles={styles.descriptionStyle} numberOfLines={1}>{description}</SmallText>
            <View style={styles.bottomView}>
            <Text style={styles.price} numberOfLines={1}>${price}</Text>
            <Text style={styles.duration} numberOfLines={1}>{duration} Hours</Text>
            </View>
            </View>
            <View>
            <Pressable style={styles.checkDetailsBtn} onPress={onPress}>
                <SmallText textStyles={styles.checkDetailsBtnText}>Check Details</SmallText>
             </Pressable>
            </View>
            </View>
        </View>
    )
}

export default OfferCard;