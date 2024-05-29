import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import styles from "./styles";
import { width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";
import { logo, master, visa } from "../../assets/images";

type props = {
  onPress?: () => void
  onPressDelete?: () => void
  cardNumber?: any,
  CardHolderName?: string,
  item?: any,
  containerStyles?: object,
  selected?: boolean, 
}

const CreditCard = ({ 
  CardHolderName, 
  cardNumber,
  onPress = ()=> null, 
  containerStyles ={}, 
  onPressDelete = ()=>null,
  selected = false 
}: props) => {
  return (
    <View
      style={[styles.lg, containerStyles, selected && styles.cardSelectedStyle]}  
    >
      <TouchableOpacity style={styles.cc} activeOpacity={1} onPress={onPress}>
      <View style={styles.innerRow}>
          <Image source={cardNumber?.charAt(0) === '5' ? master : visa} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Text style={[styles.ccText]}>
            ####{"   "}####{"   "}####{"   "}
            {cardNumber?.slice(21, 25)}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.nameText]}>{CardHolderName}</Text>
          {selected ?
          <TouchableOpacity activeOpacity={0.7} onPress={onPressDelete}>
              <FontAwesome6 name='trash-can' size={width(6)} color={AppColors.white} />
          </TouchableOpacity> : null }
        </View>
      </TouchableOpacity>
      </View>
  );
};

export default CreditCard;
