import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import CustomButton from './CustomButton';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa'
import {Font} from 'expo-font'



const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width




export default function App() {

  let [fontsLoaded] = useFonts({
    Comfortaa: Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.containerDiv}>
      <View style={styles.logoDiv}>
      <Image source={require('../PyngProject/assets/PyngLogo.png')} style={styles.image}/>
      </View>
      <View style={styles.buttonsDiv}>
        <CustomButton title = "Login" backgroundColor={'#fe07c8'} borderStyle ={{borderWidth: 1, borderColor: 'black'}} shadowStyle={{...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: 2,
        }}})}}/>
        <CustomButton title = "Sign Up" backgroundColor={'#aa47ac'} borderStyle ={{borderWidth: 1, borderColor: '#a010a3'}}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width:310,
  },

  containerDiv: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#efeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoDiv:{
    width: screenWidth,
    flex:3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:10,
  },

  buttonsDiv:{
    width: screenWidth,
    flex:1,
    
    paddingBottom: screenHeight/9,
    justifyContent: 'flex-start',
    paddingLeft: screenWidth/20,
    paddingRight: screenWidth/20,
    marginTop: screenHeight/9,
  },
});
