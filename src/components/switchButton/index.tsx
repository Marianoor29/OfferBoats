import React from "react";
import { View, Text, Image, Pressable,  Switch,} from 'react-native';
import styles from "./styles";

type textProps = {
    isEnabled?: boolean,
    toggleSwitch?: () => void
}

const SwitchButtonRow = ({
    isEnabled,
    toggleSwitch= () => null
}: textProps) => {
    return (
        <View style={styles.container}>
     
           
        </View>
    )
}

export default SwitchButtonRow;