import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';
import {
  Button,
  CreditCard,
  ScreenWrapper,
  SimpleHeader
} from '../../../../components';
import styles from './styles';
import AddCardModal, { AddCardModalHandles, FormValues } from '../../../../components/addCardModal';
import CommonStyles from '../../../../utils/CommonStyles';
import { cardData, deleteCard, getSelectedCard, setSelectedCard, addCard } from '../../../../redux/slice/paymentCard/paymentCardSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/store/hook';
import { setAppLoader } from '../../../../redux/slice/config/loaderSlice';

const Payment = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const modalRef = useRef<AddCardModalHandles>(null);
  const Cards = useAppSelector(cardData);
  const selectedCard = useAppSelector(getSelectedCard);
  
  const onPressDeleteMethod = (index: number) => {
    dispatch(setAppLoader(true));
    setTimeout(() => {
      dispatch(deleteCard(index));
      dispatch(setAppLoader(false));
    }, 600);
  };

  const onSubmitAddCard = (data: FormValues) => {
    dispatch(addCard({
      name: data.name,
      cardNumber: data.cardNumber,
      expiry: data.expiryDate,
      cvv: data.cvc
    }));
    modalRef.current?.hide();
  };

  const renderItem = ({ item, index }) => {
    return (
      <CreditCard
        containerStyles={CommonStyles.marginRight_3}
        item={item}
        CardHolderName={item.name}
        cardNumber={item.cardNumber}
        selected={index === selectedCard}
        onPress={() => dispatch(setSelectedCard(index === selectedCard ? null : index))}
        onPressDelete={() => onPressDeleteMethod(index)}
      />
    );
  };

  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        />
      )}>
      <View style={styles.container}>
      <FlatList
            data={Cards}
            keyExtractor={(_, index) => index.toString()} 
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={renderItem}
          />
      <AddCardModal 
        ref={modalRef} 
        onClose={() => modalRef?.current?.hide()} 
        onSubmit={onSubmitAddCard} // Pass the onSubmit function
      />
    <Button
     text={'Add Payment Method'}
     buttonStyle={styles.AddPaymentButton}
     textStyle={styles.AddPaymentText}
     onPress={() => modalRef?.current?.show()}
    />
       <Button
     text={'Pay with PayPal'}
     buttonStyle={styles.PayPalButton}
     textStyle={styles.PayPalText}
    />
      </View>
    </ScreenWrapper>
  );
};

export default Payment;
