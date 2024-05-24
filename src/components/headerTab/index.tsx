import React from "react";
import { TouchableOpacity, View, Text, StyleProp, ViewStyle, } from "react-native";

import styles from "./styles";
import AppColors from "../../utils/AppColors";

type Tab = {
  name: string;
};

type HeaderTabProps = {
  tabs?: Tab[];
  onPress?: (name: string) => void;
  mainContainer?: StyleProp<ViewStyle>;
  selectedTopTab?: string;
};
const HeaderTab = ({ 
  tabs = [], 
  onPress, 
  mainContainer, 
  selectedTopTab 

}:HeaderTabProps) => {
  return (
    <View style={[styles.mainContainer, mainContainer]}>
      {tabs.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          onPress={() => onPress?.(item.name)}
          style={[
            styles.BtnContainer,
            {
              backgroundColor:
                selectedTopTab === item.name
                  ? AppColors.yellow
                  : AppColors.transparent,
            },
          ]}
        >
          <Text
            style={[
              styles.BtnText,
              {
                color:
                  selectedTopTab === item.name
                    ? AppColors.white
                    : AppColors.yellow,
              },
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HeaderTab;