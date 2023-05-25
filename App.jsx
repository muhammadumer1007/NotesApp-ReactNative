import {View, Text, ScrollView, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import CreateNote from './Components/CreateNote/CreateNote';
import NotesContainer from './Components/Notes/NotesContainer';
import NotificationModal from './Components/NotificationModal/NotificationModal';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();

  const [txtTitle, setTxtTitle] = useState('');
  const [txtDescription, setTxtDescription] = useState('');
  const [notesArr, setnotesArr] = useState([]);
  const [showNotificationState, setshowNotificationState] = useState(false);
  const [notificationtxt, setNotificationtxt] = useState('');

  const showNotification = notificationTxt => {
    setshowNotificationState(true);
    setNotificationtxt(notificationTxt);

    setTimeout(() => {
      setshowNotificationState(false);
    }, 2000);
  };
  const createNote = () => {
    if (txtTitle == '' && txtDescription == '') {
      showNotification('Empty Note Discarded');
      return;
    }
    const note = {
      title: txtTitle,
      description: txtDescription,
    };
    setnotesArr([...notesArr, note]);

    showNotification('Note Created SuccessFully');
    setTxtDescription('');
    setTxtTitle('');
  };

  // useEffect(() => {
  //   console.warn(notesArr);
  // }, [notesArr]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={NotesContainer}
          initialParams={{notesArray: notesArr}}
        />

        <Stack.Screen
        options={{
          title:'Create Notes'
        }}
          name="CreateNote"
          component={CreateNote}
          initialParams={{
            txtTitle: txtTitle,
            txtDescription: txtDescription,
            setTxtTitle: setTxtTitle,
            setTxtDescription: setTxtDescription,
            createNote: createNote,
          }}
        />

        {/* {showNotificationState && (
          <NotificationModal notificationTitle={notificationtxt} />
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
    // <Text>Hello</Text>
  );
};

export default App;
