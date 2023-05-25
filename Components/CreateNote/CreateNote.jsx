import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

const CreateNote = ({route}) => {
  const {txtTitle, txtDescription, setTxtDescription, setTxtTitle, createNote} =
    route.params;
  return (
    <View>
      <Text style={styles.title}>Create A Note</Text>
      <View>
        <TextInput
          value={txtTitle}
          onChangeText={e => setTxtTitle(e)}
          style={styles.inputBox}
          placeholder="Title"
        />
        <TextInput
          value={txtDescription}
          onChangeText={e => setTxtDescription(e)}
          multiline={true}
          numberOfLines={4}
          style={styles.inputBox}
          placeholder="Description"
        />

        <TouchableOpacity onPress={createNote}>
          <Text style={styles.btn}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateNote;
