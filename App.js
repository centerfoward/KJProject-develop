const Stack = createNativeStackNavigator();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import InitPage from './screens/InitPage';
import AddCircle from './components/AddCircle';
import SerachLocation from './screens/SerachLocation';
import FieldForm from './components/FieldForm';
import SerachLocationResult from './screens/SerachLocationResult';
import FieldForm1 from './components/FieldForm1';
import SerachLocation1 from './screens/SerachLocation1';
import Calendar2023July from './screens/Calendar2023July';
import Input1 from './screens/Input1';
import RecycleRayout from './screens/RecycleRayout';
import ChoosePassionKeywordSettings from './screens/ChoosePassionKeywordSettings';
import Photozone from './screens/Photozone';
import SettingAvatar from './screens/SettingAvatar';
import PictureOfClosetSetting from './screens/PictureOfClosetSetting';
import ChooseStyleCoordiSetting from './screens/ChooseStyleCoordiSetting';
import PictureOfCloset from './screens/PictureOfCloset';
import ChooseStyleCoordi from './screens/ChooseStyleCoordi';
import ChoosePassionKeyword from './screens/ChoosePassionKeyword';
import UserPermission from './screens/UserPermission';
import MainPage from './screens/MainPage';
import Settings from './screens/Settings';
import Screen1 from './components/Screen1';
import ChooseAvatar from './screens/ChooseAvatar';
import Vaadinbutton from './components/Vaadinbutton';
import Login from './screens/Login';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="InitPage"
              component={InitPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SerachLocation"
              component={SerachLocation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SerachLocationResult"
              component={SerachLocationResult}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SerachLocation1"
              component={SerachLocation1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Calendar2023July"
              component={Calendar2023July}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Input1"
              component={Input1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RecycleRayout"
              component={RecycleRayout}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChoosePassionKeywordSettings"
              component={ChoosePassionKeywordSettings}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Photozone"
              component={Photozone}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SettingAvatar"
              component={SettingAvatar}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PictureOfClosetSetting"
              component={PictureOfClosetSetting}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChooseStyleCoordiSetting"
              component={ChooseStyleCoordiSetting}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PictureOfCloset"
              component={PictureOfCloset}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChooseStyleCoordi"
              component={ChooseStyleCoordi}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChoosePassionKeyword"
              component={ChoosePassionKeyword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="UserPermission"
              component={UserPermission}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChooseAvatar"
              component={ChooseAvatar}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <InitPage />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
