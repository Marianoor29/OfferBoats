import React from "react";
import { View, Text, TextProps, Image, Pressable } from 'react-native';
import styles from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";
import Button from "../button";
import { LargeText, SmallText } from "../text";
import CommonStyles from "../../utils/CommonStyles";

type textProps = {
    title?: string,
    source?: string,
    price?: string,
    backgroundColor?: string,
    members?: string,
    duration?: string,

}

const TopProductCard = ({
    source,
    title,
    price,
    members,
    duration,
}: textProps) => {
    return (
        <View style={styles.container}>
             <Image source={{uri: source}} style={styles.posterImage}/>
             <Pressable style={styles.btnStyle}>
                <SmallText textStyles={styles.btnTextStyle}>{members}</SmallText>
             </Pressable>
             <View style={styles.innerView}>
             <View>
            <LargeText textStyles={styles.categoryNameStyle} numberOfLines={1}>{title}</LargeText>
            <View style={CommonStyles.row}>
            <Text style={styles.numberOfItemsStyle} numberOfLines={1}>${price}</Text>
            <Text style={styles.numberOfItemsStyle} numberOfLines={1}>{duration}</Text>
            </View>
            </View>
            <View>
            <Pressable style={styles.checkDetailsBtn}>
                <SmallText textStyles={styles.checkDetailsBtnText}>Check Details</SmallText>
             </Pressable>
            </View>
            </View>
        </View>
    )
}

export default TopProductCard;