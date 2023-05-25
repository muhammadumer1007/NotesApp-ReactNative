import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {styles} from './style';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({changeNotesDirection, noteWidth}) => {
  return (
    <View>
      <View style={styles.topSection}>
        <Text style={styles.title}>Notes</Text>
        <View style={styles.buttonSection}>
          {/* Add Note Button */}
          <TouchableHighlight style={styles.icons}>
            <Icon name="pluscircle" size={24} color="black" />
          </TouchableHighlight>
          {/* changeNotesDirection Button */}
          <TouchableHighlight
            style={styles.icons}
            onPress={changeNotesDirection}>
            {noteWidth == '45%' ? (
              <Foundation name="list" size={30} color="black" />
            ) : (
              <Feather name="columns" size={30} color="black" />
            )}
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Header;
