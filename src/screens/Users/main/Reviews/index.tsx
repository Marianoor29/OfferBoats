import React from 'react';
import { FlatList, View } from 'react-native';
import {
  LargeText,
  ReviewDetailCard,
  ScreenWrapper,
  SimpleHeader
} from '../../../../components';
import styles from './styles';
import { ReviewList } from '../../../../utils/DummyData';

interface Review {
  id: string;
  reviewerName: string;
  reviewerImage: string;
  reviewDate: string;
  reviewText: string;
}
const Reviews = ({ navigation, route }: any) => {
  // const { transaction } = route.params;
  const renderReviewList = ({ item }: any) => {
    return (
   <ReviewDetailCard
   reviewerName={item.reviewerName}
   reviewerImage={item.reviewerImage}
   reviewDate={item.reviewDate}
   reviewText={item.reviewText}
   rating={item.rating}
   />
    );
  };
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        emptyView={<LargeText size={4} >Reviews</LargeText>}
        />
      )}>
      <View style={styles.container}>
      <FlatList
          data={ReviewList}
          renderItem={renderReviewList}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Reviews;
