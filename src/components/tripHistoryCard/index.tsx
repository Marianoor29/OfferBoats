import React from "react";
import { Image, TouchableOpacity, View, StyleProp, ViewStyle, ImageSourcePropType } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MediumText } from "../text";
import AppColors from "../../utils/AppColors";
import CommonStyles from "../../utils/CommonStyles";
import {ORDER_STATUSES} from '../../utils/enum'
import styles from "./styles";
import  Button  from "../button";
import { width } from "../../utils/Dimension";

type TripOrdersProps = {
  image: ImageSourcePropType;
  serviceName?: string;
  serviceDesc?: string;
  address?: string;
  date?: string;
  onPressDecline?: () => void;
  containerStyles?: StyleProp<ViewStyle>;
  statusView?: string;
  price?: string | number;
  onPressProgress?: () => void;
  onPress?: () => void;
};

type AddressRowProps = {
  icon: React.ReactNode;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const AddressRow = ({ icon, text, containerStyle }: AddressRowProps) => {
  return (
    <View style={[styles.row, containerStyle]}>
      {icon}
      <MediumText
        color={AppColors.black}
        size={3}
        textStyles={styles.textStyles}
        numberOfLines={1}
      >
        {text}
      </MediumText>
    </View>
  );
};

const TripOrders = ({
  image,
  serviceName,
  serviceDesc,
  address,
  date,
  onPressDecline,
  containerStyles,
  statusView = "",
  price,
  onPressProgress = () => null,
  onPress
}: TripOrdersProps) => {
  const handleBadgeBg =
    statusView === ORDER_STATUSES.PENDING
      ? AppColors.seaGreen
      : statusView === ORDER_STATUSES.CONFIRMED
      ? AppColors.green
      : statusView === ORDER_STATUSES.COMPLETED
      ? AppColors.greenyellow
      : statusView === ORDER_STATUSES.CANCELLED
      ? AppColors.red
      : AppColors.red;

  const handlebadgeText =
    statusView === ORDER_STATUSES.PENDING
      ? AppColors.white
      : statusView === ORDER_STATUSES.CONFIRMED
      ? AppColors.white
      : statusView === ORDER_STATUSES.COMPLETED
      ? AppColors.white
      : statusView === ORDER_STATUSES.CANCELLED
      ? AppColors.white
      : AppColors.white;

  return (
    <TouchableOpacity
      style={[styles.mainView, containerStyles]}
      activeOpacity={1}
      onPress={onPress}
    >
      <View style={styles.infoContainer}>
        <View style={styles.innerView}>
          <Image source={image} style={styles.image} resizeMode={"cover"} />
          <View >
            {serviceName && (
              <MediumText
                numberOfLines={1}
                size={4}
                color={AppColors.black}
                textStyles={styles.service}
              >
                {serviceName}
              </MediumText>
            )}
          </View>
        </View>
        {statusView !== "" && (
          <MediumText
            size={3}
            color={handlebadgeText}
            textStyles={[
              styles.statusView,
              { backgroundColor: handleBadgeBg },
            ]}
          >
            {statusView === ORDER_STATUSES.CONFIRMED
              ? "Confirmed"
              : statusView === ORDER_STATUSES.COMPLETED
              ? "Completed"
              : statusView === ORDER_STATUSES.CANCELLED
              ? "Cancelled"
              : "Pending"}
          </MediumText>
        )}
      </View>
      {address && (
        <AddressRow
          containerStyle={CommonStyles.marginTop_2}
          icon={<Ionicons name="location-sharp" size={width(5)} color={AppColors.black} />}
          text={address}
        />
      )}
      <View style={styles.priceRow}>
        {date && (
          <AddressRow
            icon={<FontAwesome name="calendar" size={width(5)} color={AppColors.black} />}
            text={date}
          />
        )}
        {price && (
          <MediumText
            numberOfLines={1}
            size={4.5}
            color={AppColors.darkblue}
           textStyles={styles.priceContainer}
          >
            ${price}
          </MediumText>
        )}
      </View>
      {statusView !== ORDER_STATUSES.COMPLETED && statusView !== ORDER_STATUSES.CANCELLED && (
        <>
          {onPressDecline && (
            <View style={styles.btnView}>
              <Button
                text={"Cancel"}
                buttonStyle={styles.CancelContainer}
                textStyle={styles.btnTextCancel}
                onPress={onPressDecline}
              />
            </View>
          )}

        </>
      )}
    </TouchableOpacity>
  );
};

export default TripOrders;
