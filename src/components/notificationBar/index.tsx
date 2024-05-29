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
  source?: string
  title?: string
  caption?: string
 }
const NotificationBar = (
  {
    onPress = () => null,
    source,
    title,
    caption,
  }: props,
  ref: React.Ref<ModalHandles>
) => {

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri: source}} style={styles.ImageStyle}/>
      <View style={styles.titleView}>
      <LargeText size={3.3} numberOfLines={1}>{title}</LargeText>
      <SmallText size={2.8} numberOfLines={2}>{caption}</SmallText>
      </View>
    </Pressable>
  );
};
export default NotificationBar;
