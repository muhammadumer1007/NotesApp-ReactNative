import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Note from './Note';
import {noteContainerStyles} from './styles';
import Header from '../Header/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotesContainer = ({notesArray}) => {
  const [noteWidth, setNoteWidth] = useState('45%');
  const [notesMargin, setNotesMargin] = useState('2.5%');

  const setStatesToUserDefinedDirection = async () => {
    let directionSetByUser = await AsyncStorage.getItem(
      '@USER_SET_NOTES_DIRECTION',
    );
    if (directionSetByUser != null) {
      directionSetByUser = JSON.parse(directionSetByUser);
      setNoteWidth(directionSetByUser.width);
      setNotesMargin(directionSetByUser.margin);
      console.log(directionSetByUser);
    }
  };

  useEffect(() => {
    setStatesToUserDefinedDirection();
  }, []);
  const changeNotesDirection = async () => {
    let noteDirection;
    if (noteWidth == '45%') {
      setNoteWidth('90%');
      setNotesMargin('5%');
      noteDirection = {
        width: '90%',
        margin: '5%',
      };
    } else {
      setNoteWidth('45%');
      setNotesMargin('2.5%');
      noteDirection = {
        width: '45%',
        margin: '2.5%',
      };
    }

    try {
      await AsyncStorage.setItem(
        '@USER_SET_NOTES_DIRECTION',
        JSON.stringify(noteDirection),
      );
      console.log(noteDirection);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <View>
      <Header
        changeNotesDirection={changeNotesDirection}
        noteWidth={noteWidth}
        notesMargin={notesMargin}
      />
      <ScrollView>
        <View style={noteContainerStyles.container}>
          {notesArray.length ? (
            // <FlatList
            //   data={notesArray}
            //   renderItem={({item}) => {
            //     <Note
            //       notesDircetionStyles={{width: noteWidth, margin: notesMargin}}
            //       note={item}
            //     />
            //   }}
            // />

            notesArray.map((e, i) => {
              return (
                <Note
                  notesDircetionStyles={{width: noteWidth, margin: notesMargin}}
                  note={e}
                  key={i}
                />
              );
            })
          ) : (
            <View style={noteContainerStyles.noNotesContainer}>
              <Text style={noteContainerStyles.noNotesHeading}>
                No Notes Press Here To
              </Text>
              <TouchableHighlight>
                <Text style={noteContainerStyles.createNoteBtn}>Add</Text>
              </TouchableHighlight>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default NotesContainer;
