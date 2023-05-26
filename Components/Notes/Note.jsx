import {View, Text} from 'react-native';
import React from 'react';
import { noteStyles } from './styles';

const Note = ({notesDircetionStyles, note}) => {
  return (
    <View
      style={[
        noteStyles.note,
        {
          width: notesDircetionStyles.width,
          marginHorizontal: notesDircetionStyles.margin,
        },
      ]}>
      {/* top section */}
      <View style={noteStyles.noteTopSection}>
        <Text style={noteStyles.date}>Tags</Text>
        <Text style={noteStyles.date}>{note.createdAt}</Text>
      </View>
      {/* bottom section */}
      <View>
        <Text style={noteStyles.title}>{note.title}</Text>
        <Text style={noteStyles.description}>{note.description}</Text>
      </View>
    </View>
  );
};

export default Note;
