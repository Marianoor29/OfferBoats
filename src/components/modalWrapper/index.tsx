import React, { forwardRef, ReactNode, useImperativeHandle, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppColors from "../../utils/AppColors";
import { width } from "../../utils/Dimension";
import Button from "../button";
import styles from "./styles";

export interface ModalHandles {
  show: () => void;
  hide: () => void;
}
type props = {
  onClose?: () => void
  text?: string
  innerContainerStyles?: object
  onPressBtn?: () => void
  btnTitle?: string
  modalMainContainer?: object,
  isColor?: boolean,
  children?: ReactNode;
 }
const ModalWrapper = (
  {
    onClose = () => null,
    text = "Add Card Details",
    innerContainerStyles= {},
    onPressBtn=()=>null,
    btnTitle= "Save",
    modalMainContainer= {},
    isColor = true,
    children = '',
  }: props,
  ref: React.Ref<ModalHandles>
) => {
  const [visible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
    hide: () => {
      setVisible(false);
    },
  }));

  return (
    <Modal
      isVisible={visible}
      style={styles.modalContainer}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      avoidKeyboard={true}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      backdropColor={isColor ? 'black' : 'transparent'}
      animationInTiming={500}
      animationOutTiming={600}
      backdropOpacity={0.1}
    >
     <View style={[styles.modalInnerContainer, innerContainerStyles]}>
        <View style={styles.modalHeaderView}>
          <TouchableOpacity
          style={styles.topView}
            activeOpacity={0.6}
            onPress={() => setVisible(false)}
          >
           <AntDesign name='close' size={width(5)} color={AppColors.grey} />
          </TouchableOpacity>
     <View style={[styles.modalMainView,modalMainContainer]}>
      {children}
      </View>
        <Button
          text={btnTitle}
          buttonStyle={styles.button}
          onPress={onPressBtn}
        />
      </View>
      </View>
    </Modal>
  );
};
export default forwardRef(ModalWrapper);
