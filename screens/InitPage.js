import * as React from 'react';
import Login from './Login';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, FontSize, Color} from '../GlobalStyles';

const InitPage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.initpage}
      locations={[0, 1]}
      colors={['#3e64ff', 'rgba(62, 100, 255, 0)']}
      useAngle={true}
      angle={180}>
      <Pressable
        style={styles.pressable}
        onPress={() => {
          navigation.navigate(Login);
        }}>
        <Image
          style={styles.initPageIcon}
          resizeMode="cover"
          source={require('../assets/init-page.png')}
        />
        <View style={styles.logotext}>
          <Text style={[styles.oott, styles.oottFlexBox]}>OOTT</Text>
          <Text style={[styles.outfitOfThe, styles.oottFlexBox]}>
            Outfit OF the Travel
          </Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  oottFlexBox: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    fontFamily: FontFamily.tenada,
    position: 'absolute',
    alignItems: 'center',
  },
  initPageIcon: {
    alignItems: 'center',
    flex: 1,
  },
  oott: {
    alignItems: 'center',
    fontSize: FontSize.size_35xl,
    color: Color.white,
    flex: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    width: 200,
  },
  outfitOfThe: {
    alignItems: 'center',
    flex: 1,
    fontSize: FontSize.size_5xs,
    color: Color.mediumslateblue_100,
    width: 200,
  },
  logotext: {
    flex: 1,
    top: 380,
    height: '100%',
    width: 250,
    position: 'absolute',
    alignItems: 'center',
  },
  pressable: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: '100%',
  },
  initpage: {
    height: 640,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InitPage;
