import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import {FontFamily, FontSize, Color} from '../GlobalStyles';

const LogoText = () =>{
    return (
    <View style={styles.logotext}>
          <Text style={[styles.oott, styles.oottFlexBox]}>OOTT</Text>
          <Text style={[styles.outfitOfThe, styles.oottFlexBox]}>
            Outfit OF the Travel
          </Text>
        </View>
    );
}

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
}
});

export default LogoText