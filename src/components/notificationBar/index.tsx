import React, { ReactNode } from "react";
import { Image, Pressable, View } from "react-native";
import styles from "./styles";
import { logo, logoHat } from "../../assets/images";
import { LargeText, SmallText } from "../text";

export interface ModalHandles {
  show: () => void;
  hide: () => void;
}
type props = {
  onPress?: () => void
 }
const NotificationBar = (
  {
    onPress = () => null,
  }: props,
  ref: React.Ref<ModalHandles>
) => {

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={logoHat} style={styles.ImageStyle}/>
      <View>
      <LargeText size={3.3} numberOfLines={1}>Content for the notifications will be added here the notifications will be added here</LargeText>
      <SmallText size={2.8}>Content for the notifications will be added here</SmallText>
      </View>
    </Pressable>
  );
};
export default NotificationBar;
