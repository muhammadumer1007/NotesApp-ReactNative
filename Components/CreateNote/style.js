import {StyleSheet} from 'react-native';
import {mainColor} from '../../Assets/Constants';
export const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    color: mainColor,
  },
  btn: {
    backgroundColor: mainColor,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    width: '80%',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 5,
  },
  icons: {
    marginHorizontal: 10,
  },
});
