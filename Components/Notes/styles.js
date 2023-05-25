import {StyleSheet} from 'react-native';
import {mainColor} from '../../Assets/Constants';

export const noteStyles = StyleSheet.create({
  note: {
    backgroundColor: mainColor,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    marginTop: 5,
  },
  description: {
    fontSize: 19,
    marginTop: 5,
  },
  date: {
    fontSize: 18,
  },
  noteTopSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const noteContainerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  noNotesHeading: {
    fontSize: 22,
    marginHorizontal: 20,
  },
  createNoteBtn: {
    fontSize: 22,
    backgroundColor: mainColor,
    color: 'white',
    width: 100,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  noNotesContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10
  }
});

export const noteAddBtnStyles = StyleSheet.create({
  container: {},
});
