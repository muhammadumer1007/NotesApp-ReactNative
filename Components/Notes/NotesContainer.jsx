import {View, Text, ScrollView, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import Note from './Note';
import {noteContainerStyles} from './styles';
import Header from '../Header/Header';

const NotesContainer = ({route, navigation}) => {
  const {notesArray} = route.params;

  const [noteWidth, setNoteWidth] = useState('45%');
  const [notesMargin, setNotesMargin] = useState('2.5%');
  const changeNotesDirection = () => {
    if (noteWidth == '45%') {
      setNoteWidth('90%');
      setNotesMargin('5%');
    } else {
      setNoteWidth('45%');
      setNotesMargin('2.5%');
    }
  };
  return (
    <ScrollView>
      <Header
        changeNotesDirection={changeNotesDirection}
        noteWidth={noteWidth}
        notesMargin={notesMargin}
      />
      <View style={noteContainerStyles.container}>
        {notesArray.length ? (
          notesArray.map((e, i) => {
            return (
              <Note
                key={i}
                notesDircetionStyles={{width: noteWidth, margin: notesMargin}}
                note={e}
              />
            );
          })
        ) : (
          <View style={noteContainerStyles.noNotesContainer}>
            <Text style={noteContainerStyles.noNotesHeading}>
              No Notes Press Here To 
            </Text>
            <TouchableHighlight onPress={()=> navigation.navigate('CreateNote')}>
              <Text style={noteContainerStyles.createNoteBtn}>Add</Text>
            </TouchableHighlight>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default NotesContainer;
