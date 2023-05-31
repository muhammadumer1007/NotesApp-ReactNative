import {View, TouchableHighlight, Text} from 'react-native';
import React, {useState} from 'react';
import {SingleNotePreviewStyles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import ColorModal from './ColorModal';

const SingleNotePreview = () => {
  const [showColorModal, setshowColorModal] = useState(false);

  const toggleModalFunction = () => {
    setshowColorModal(!showColorModal);
  };
  return (
    <View>
      <View style={SingleNotePreviewStyles.container}>
        <View style={SingleNotePreviewStyles.iconContainer}>
          <TouchableHighlight style={SingleNotePreviewStyles.iconBtn}>
            <Icon name="pushpin" size={24} color="black" />
          </TouchableHighlight>
        </View>
        <Text style={SingleNotePreviewStyles.title}>SingleNotePreview</Text>
        <Text style={SingleNotePreviewStyles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          consectetur numquam hic ea libero! Eaque iure reiciendis perspiciatis
          eius odio fuga minima modi facere? Quas ullam quis aspernatur alias
          officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit consectetur numquam hic ea libero! Eaque iure reiciendis
          perspiciatis eius odio fuga minima modi facere? Quas ullam quis
          aspernatur alias officiis?
        </Text>
      </View>
      {
        showColorModal && <ColorModal/>
      }
     
      <View style={SingleNotePreviewStyles.bottomContainer}>
        <View>
          <TouchableHighlight onPress={toggleModalFunction}>
            <Text>
              <Ionicons name="color-palette" color="white" size={30} />
            </Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text style={SingleNotePreviewStyles.item}>Created At</Text>
        </View>
        <View>
          <TouchableHighlight style={SingleNotePreviewStyles.iconBtn}>
            <FontAwesomeIcon name="trash" size={24} color="white" />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default SingleNotePreview;
