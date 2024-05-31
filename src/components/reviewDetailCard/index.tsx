import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { LargeText, SmallText } from "../text";
import styles from "./styles";
import { width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyles from '../../utils/CommonStyles';

type ReviewItemProps ={
    reviewerName: string;
    reviewerImage: string;
    reviewDate: string;
    reviewText: string;
    rating: number,
  }

const ReviewDetailCard = ({
  reviewerName,
  reviewerImage,
  reviewDate,
  reviewText,
  rating
}: ReviewItemProps) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? true : false;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const renderStars = () => {
        const stars: JSX.Element[] = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<Icon key={`full-${i}`} name="star" size={width(4)} color={AppColors.starYellow} />);
        }
        if (halfStar) {
            stars.push(<Icon key="half" name="star" size={width(4)} color={AppColors.starYellow} />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<Icon key={`empty-${i}`} name="star-o" size={width(4)} color={AppColors.starYellow} />);
        }
        return stars;
    };
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };
  
    const truncatedText = isExpanded ? reviewText : `${reviewText.substring(0, 100)}...`;
    return (
        <View style={styles.reviewContainer}>
      <Image source={{ uri: reviewerImage }} style={styles.reviewerImage} />
      <View style={styles.reviewContent}>
        <LargeText size={4}>{reviewerName}</LargeText>
        <SmallText size={3.4} color={AppColors.grey} textStyles={CommonStyles.marginBottom_1}>{reviewDate}</SmallText>
        <View style={styles.Ratingcontainer}>
                <View style={styles.starsContainer}>{renderStars()}</View>
            </View>
        <SmallText >{truncatedText}</SmallText>
        <TouchableOpacity onPress={toggleReadMore}>
          <Text style={styles.readMore}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

export default ReviewDetailCard;