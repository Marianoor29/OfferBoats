import React, { useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View, Keyboard  } from 'react-native';
import {
  LargeText,
  ScreenWrapper,
  SimpleHeader,
  SmallText
} from '../../../../components';
import styles from './styles';
import CommonStyles from '../../../../utils/CommonStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { width } from '../../../../utils/Dimension';
import AppColors from '../../../../utils/AppColors';
import { useAppDispatch, useAppSelector } from '../../../../redux/store/hook';
import { RootState } from '../../../../redux/store';
import { addSearch } from '../../../../redux/slice/search/searchSlice';

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: '1', name: 'Miami' },
  { id: '2', name: 'Miami Beach' },
  { id: '3', name: 'Tampa' },
  { id: '4', name: 'Los Angeles' },
  { id: '5', name: 'Seattle' },
  { id: '6', name: 'Washington D.C.' },
  { id: '7', name: 'San Francisco' },
  { id: '8', name: 'Chicago' },
  { id: '9', name: 'New York City' },
];

const Search = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const recentSearches = useAppSelector((state: RootState) => state.search.recentSearches);

 
  const handleSearch = () => {
    if (searchTerm.trim().length === 0) return;

    dispatch(addSearch(searchTerm));
    setSearchTerm('');
    Keyboard.dismiss();
  };

  const handleSelectRecentSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSelectCategory = (name: string) => {
    setSearchTerm(name);
  };


  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <View style={styles.searchView}>
      <Pressable onPress={() => navigation.goBack()} style={styles.iconView}>
      <AntDesign name="arrowleft" size={width(5)} color={AppColors.grey} />
      </Pressable>
        <TextInput
        style={styles.searchBar}
        placeholder="Where do you want to go"
        placeholderTextColor={AppColors.black}
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSearch}
      />
      <Pressable onPress={handleSearch}>
       <Ionicons name="search-sharp" size={width(5)} color={AppColors.grey} />
       </Pressable>
      </View>
      )}>
      <View style={styles.container}>
      <LargeText size={4} textStyles={styles.heading}>Recent Searches</LargeText>
      <FlatList
          data={recentSearches}
          keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleSelectRecentSearch(item)}>
            <SmallText size={3.4}>{item}</SmallText>
          </TouchableOpacity>
        )}
      />
      <LargeText size={4} textStyles={styles.heading}>Explore Places</LargeText>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.placesItem} onPress={() => handleSelectCategory(item.name)}>
          <Ionicons name='location' size={width(5)} color={AppColors.yellow} /> 
          <SmallText size={3.4} textStyles={CommonStyles.marginLeft_2}>{item.name}</SmallText>
          </TouchableOpacity>
        )}
      />
      </View>
    </ScreenWrapper>
  );
};

export default Search;
