import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton ({ title, backgroundColor, borderStyle, shadowStyle }) {
    const buttonStyle = {
        ...styles.button,
        backgroundColor: backgroundColor,
        ...borderStyle,
        ...shadowStyle
      }
    

    return (
      <TouchableOpacity style={buttonStyle}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    button: {
      paddingVertical: 4,
      borderRadius: 27,
      marginTop: 10,
      height: 55,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Comfortaa',
        letterSpacing: 0.5,
    }
  });