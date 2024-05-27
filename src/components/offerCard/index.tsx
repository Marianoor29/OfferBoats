import React from "react";
import { Image, Pressable, Text, View } from 'react-native';
import CommonStyles from "../../utils/CommonStyles";
import { LargeText, SmallText } from "../text";
import styles from "./styles";

type textProps = {
    title?: string,
    source?: string,
    boatOwnerImage?: string,
    price?: number,
    backgroundColor?: string,
    members?: number,
    duration?: number,
    onPress?: () => void,
    description?: string

}

const OfferCard = ({
    source,
    boatOwnerImage,
    title,
    price,
    members,
    duration,
    description,
    onPress = () => null
}: textProps) => {
    return (
        <View style={styles.container}>
             <Image source={{uri: source}} style={styles.posterImage}/>
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