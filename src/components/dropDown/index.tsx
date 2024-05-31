import React from "react";
import { Image, Pressable, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { LargeText, MediumText, SmallText } from "../text";
import styles from "./styles";
import { width } from "../../utils/Dimension";
import Feather from 'react-native-vector-icons/Feather'
import AppColors from "../../utils/AppColors";
import CommonStyles from "../../utils/CommonStyles";

type textProps = {
    title?: string,
    onPress?: () => void,
    dropdown?: boolean,
    detail?: string
}

const DropDown = ({
    title,
    onPress = () => null,
    dropdown = false,
    detail
}: textProps) => {
    return (
        <View style={[styles.container, ]}>
            <View style={styles.innerContainer}>
                <LargeText size={4.6} textStyles={CommonStyles.marginBottom_2}>{title}</LargeText>
                <Pressable onPress={onPress}>
                <Feather name={dropdown ? 'chevron-up' :'chevron-down'} size={width(6)} color={AppColors.yellow} />
                </Pressable>
            </View>
            {dropdown && (
    <MediumText size={4.6}>{detail}</MediumText>
            ) }
        </View>
    )
}

export default DropDown;