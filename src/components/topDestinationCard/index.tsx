import React from "react";
import { Image, Pressable, Text, View } from 'react-native';
import CommonStyles from "../../utils/CommonStyles";
import { LargeText, SmallText } from "../text";
import styles from "./styles";

type textProps = {
    title?: string,
    source?: string,
    onPress?: () => void,

}

const TopDestinationCard = ({
    source,
    title,
    onPress = () => null
}: textProps) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
             <Image source={{uri: source}} style={styles.posterImage}/>
           <LargeText size={3.4} numberOfLines={2}>{title}</LargeText>
        </Pressable>
    )
}

export default TopDestinationCard;