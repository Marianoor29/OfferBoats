import 'react-native-gesture-handler';
import  'react-native-reanimated';
import React from 'react';
import MainNavigation from './navigation/navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
