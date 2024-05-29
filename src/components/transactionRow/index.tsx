import React from "react";
import { Image, Pressable, Text, View } from 'react-native';
import CommonStyles from "../../utils/CommonStyles";
import { LargeText, SmallText } from "../text";
import Feather from 'react-native-vector-icons/Feather'
import styles from "./styles";
import AppColors from "../../utils/AppColors";
import { width } from "../../utils/Dimension";

type TransactionRowProps = {
    title?: string
    date?: string
    time?: string
    price?: number
    transactionStatus?: string
    onPress?: () => void
}

const TransactionRow = ({
    title,
    date,
    time,
    price,
    transactionStatus,
    onPress=() => null
}: TransactionRowProps) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            {transactionStatus === 'Success' ? 
            <Feather name='check-circle' size={width(5)} color={AppColors.green} />
            :
            <Feather name='x-circle' size={width(5)} color={AppColors.red} />}
            <View style={styles.innerContainer}>
                <LargeText size={4} numberOfLines={1}>{title}</LargeText>
                <View style={CommonStyles.row}>
                <SmallText  size={3}>{date} - </SmallText>
                <SmallText  size={3}>{time}</SmallText>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <LargeText size={3.4} numberOfLines={1}>${price}</LargeText>
                <LargeText size={3} color={transactionStatus === 'Success' ? AppColors.green : AppColors.red}>{transactionStatus}</LargeText>
            </View>
        </Pressable>
    )
}

export default TransactionRow;