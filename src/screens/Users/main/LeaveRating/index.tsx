import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import {
  Button,
  LargeText,
  MediumText,
  ModalWrapper,
  ScreenWrapper,
  SimpleHeader
} from '../../../../components';
import { width } from '../../../../utils/Dimension';
import styles from './styles';
import { ModalHandles } from '../../../../components/modalWrapper';
import CommonStyles from '../../../../utils/CommonStyles';
import LottieView from 'lottie-react-native';

const LeaveRating = ({ navigation, route }: any) => {
  const modalRef = useRef<ModalHandles>(null);
  const handleRatingCompleted = (rating: number) => {
    console.log("Rating is: " + rating);
  };
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => {
        return <SimpleHeader
          onPressFirstIcon={() => navigation.goBack()}
        />
      }}
      footerUnScrollable={() => (
        <Button
          text='Send Review'
          buttonStyle={styles.footerBtnStyle}
          onPress={() => modalRef?.current?.show()}
        />
      )}>
      <View style={styles.container}>
        <LargeText size={4}>Write your review here</LargeText>
        <TextInput
          multiline
          numberOfLines={6}
          style={styles.reviewContainer}
        />
        <Rating
          type="star"
          ratingCount={5}
          imageSize={width(8)}
          
          onFinishRating={handleRatingCompleted}
        />

        <ModalWrapper
          ref={modalRef}
          onClose={() => modalRef?.current?.hide()}
          children={
            <>
              <LottieView source={require('../../../../assets/gif/tick.json')} style={styles.animatedImageStyle} autoPlay loop={false} />
              <MediumText textAlign="center" textStyles={CommonStyles.marginBottom_2} >Thanks for rating our services! {'\n'}  Your feedback helps us improve.</MediumText>
              <Button
                text='CONTINUE'
                onPress={() => {
                  modalRef?.current?.hide()
                  setTimeout(() => {
                    navigation.goBack()
                  }, 600);
                }}
              />
            </>
          }
        />
      </View>
    </ScreenWrapper>
  );
};

export default LeaveRating;
