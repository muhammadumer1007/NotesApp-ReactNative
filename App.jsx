import {View, Text, ScrollView, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import CreateNote from './Components/CreateNote/CreateNote';
import NotesContainer from './Components/Notes/NotesContainer';
import NotificationModal from './Components/NotificationModal/NotificationModal';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const Stack = createStackNavigator();

  const [txtTitle, setTxtTitle] = useState('');
  const [txtDescription, setTxtDescription] = useState('');
  const [asyncStorageNotes, setasyncStorageNotes] = useState([]);
  const [showNotificationState, setshowNotificationState] = useState(false);
  const [notificationtxt, setNotificationtxt] = useState('');

  const showNotification = notificationTxt => {
    setshowNotificationState(true);
    setNotificationtxt(notificationTxt);

    setTimeout(() => {
      setshowNotificationState(false);
    }, 2000);
  };
  const createNote = async () => {
    if (txtTitle == '' && txtDescription == '') {
      showNotification('Empty Note Discarded');
      return;
    }
    const note = {
      title: txtTitle,
      description: txtDescription,
    };

    let noteArr = [...asyncStorageNotes, note];
    setasyncStorageNotes(noteArr);
    try {
      await AsyncStorage.setItem('@NOTES', JSON.stringify(noteArr));
    } catch (error) {
      console.warn(error);
    }

    showNotification('Note Created SuccessFully');
    setTxtDescription('');
    setTxtTitle('');
  };

  useEffect(() => {
    (async () => {
      let notes;
      try {
        notes = await AsyncStorage.getItem('@NOTES');
      } catch (error) {
        console.warn(error);
      }
      if (notes == null) {
        setasyncStorageNotes([]);
      } else {
        setasyncStorageNotes(JSON.parse(notes));
      }
    })();
  }, []);

  // useEffect(() => {
  //   const getNotesFromAsyncStorage = async () => {
  //     const notes = await AsyncStorage.getItem('@NOTES');
  //     console.warn(notes);
  //   };
  //   getNotesFromAsyncStorage();
  // }, []);

  return (
    <View>
      <CreateNote
        txtTitle={txtTitle}
        txtDescription={txtDescription}
        setTxtTitle={setTxtTitle}
        setTxtDescription={setTxtDescription}
        createNote={createNote}
      />

      <NotesContainer notesArray={asyncStorageNotes} />

      {showNotificationState && (
        <NotificationModal notificationTitle={notificationtxt} />
      )}
    </View>
  );
};

export default App;
