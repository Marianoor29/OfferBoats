import React from "react";
import { View } from 'react-native';
import { MediumText } from "../text";
import styles from "./styles";

type OfferDetailCardProps = {
    price?: number,
    members?: number,
    duration?: number,
    rating?: number,
}

const OfferDetailCard = ({
    price,
    members,
    duration,
    rating,
}: OfferDetailCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.rowStyles}>
              <MediumText size={3.4}>Price</MediumText>
              <MediumText textStyles={styles.smallText}>${price}</MediumText>
              </View>
              <View style={styles.rowStyles}>
              <MediumText size={3.4}>Members</MediumText>
            <MediumText textStyles={styles.smallText}>{members} members</MediumText>
            </View>
            <View style={styles.rowStyles}>
            <MediumText size={3.4}>Duration</MediumText>
            <MediumText textStyles={styles.smallText}>{duration} hours</MediumText>
            </View>
            <View style={styles.rowStyles}>
            <MediumText size={3.4}>Owners Rating</MediumText>
            <MediumText textStyles={styles.smallText}>Rating: {rating} </MediumText>
            </View>
        </View>
    )
}

export default OfferDetailCard;