import React from 'react';
import { View } from 'react-native';
import {
  LargeText,
  MediumText,
  ScreenWrapper,
  SimpleHeader
} from '../../../../components';
import styles from './styles';
import { FlatList } from 'react-native';
import { width } from '../../../../utils/Dimension';
import AppColors from '../../../../utils/AppColors';
import Feather from 'react-native-vector-icons/Feather'

const FullFeatureList = ({ navigation, route }: any) => {
  const { features } = route.params;
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <SimpleHeader 
        onPressFirstIcon={() => navigation.goBack()}
        emptyView={<LargeText size={4.8} >Features</LargeText>}
        />
      )}>
      <View style={styles.container}>
      <FlatList
          data={features}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.featuresView}>
              <MediumText>{item}</MediumText>
              <Feather name='check-circle' size={width(5)} color={AppColors.green} />
            </View>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default FullFeatureList;
