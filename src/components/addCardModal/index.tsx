import React, { forwardRef, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { TouchableOpacity, View , Text, TextInput} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Modal from "react-native-modal";
import AppColors from "../../utils/AppColors";
import CommonStyles from "../../utils/CommonStyles";
import { width } from "../../utils/Dimension";
import { PaymentCardSchema } from "../../utils/validationSchemas";
import styles from "./styles";
import Button from "../button";
import InputField from "../inputField";

export interface AddCardModalHandles {
  show: () => void;
  hide: () => void;
}

export type FormValues = {
  name: string,
  cardNumber: string, // Change to string
  expiryDate: string, // Change to string
  cvc: string,
}
type props = {
  onClose?: () => void
  onSubmit?: (data: FormValues) => void
 }
const AddCardModal = ({
  onClose = () => null,
  onSubmit = () => null, // Default onSubmit function
}: props,
ref: React.Ref<AddCardModalHandles>
) => {
  const cardNumberRef = useRef<TextInput>(null);
  const expiryDateRef = useRef<TextInput>(null);
  const cvcRef = useRef<TextInput>(null);
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
    hide: () => {
      setVisible(false);
    },
  }));

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      name: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
    resolver: yupResolver(PaymentCardSchema),
  });

  const formatCardNumber = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/(.{4})/g, "$1-").slice(0, -1);
    return formattedValue;
  };

  const formatExpiryDate = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/(.{2})/g, "$1/").slice(0, -1);
    return formattedValue;
  };

  return (
    <Modal
      isVisible={visible}
      style={styles.modalContainer}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      avoidKeyboard={true}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      animationInTiming={500}
      animationOutTiming={600}
      backdropOpacity={0.1}
    >
     <View style={[styles.modalInnerContainer]}>
        <View style={styles.modalHeaderView}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setVisible(false)}
          >
           <AntDesign name='close' size={width(6)} color={AppColors.darkblue} />
          </TouchableOpacity>
          <Text style={[styles.modalHeading]}>Add Card Details</Text>
        </View>
        <InputField
          title="Name On Card"
          placeholder="Enter Name"
          control={control}
          name="name"
          returnKeyLabel="next"
          onSubmitEditing={() => cardNumberRef?.current?.focus()}
          error={errors?.name?.message}
        />
        <InputField
          ref={cardNumberRef}
          title="Card Number"
          placeholder="xxxx - xxxx - xxxx - xxxxx"
          control={control}
          name="cardNumber"
          error={errors?.cardNumber?.message}
          keyboardType="numeric"
          returnKeyLabel="next"
          onSubmitEditing={() => expiryDateRef?.current?.focus()}
          onChangeText={(value: string) => {
            const formattedValue = formatCardNumber(value);
            setValue("cardNumber", formattedValue);
          }}
        />
        <View style={styles.bottomView}>
          <View>
          <InputField
             ref={expiryDateRef}
            title="Expiry Date"
            placeholder="MM / YY"
            control={control}
            name="expiryDate"
            error={errors?.expiryDate?.message}
            keyboardType="numeric"
            returnKeyLabel="next"
            onSubmitEditing={() => cvcRef?.current?.focus()}
            containerStyle={styles.nameInputContainerStyle}
            textinputStyle={styles.nameInputTextStyle}
            errorView={styles.errorView}
            onChangeText={(value: string) => {
              const formattedValue = formatExpiryDate(value);
              setValue("expiryDate", formattedValue);
            }}
          />
          </View>
          <View>
          <InputField
            title="CVC"
            ref={cvcRef}
            placeholder="XXX"
            control={control}
            returnKeyLabel="done"
            name="cvc"
            error={errors?.cvc?.message}
            keyboardType="numeric"
            containerStyle={styles.nameInputContainerStyle}
            textinputStyle={styles.nameInputTextStyle}
            errorView={styles.errorView}
          />
          </View>
        </View>
        <Button
          text="Save"
          buttonStyle={styles.button}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </Modal>
  );
};

export default forwardRef(AddCardModal);
