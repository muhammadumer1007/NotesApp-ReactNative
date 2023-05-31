import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {ColorModalStyle} from './styles';

const ColorModal = () => {
  return (
    <View style={ColorModalStyle.outer}>
      <View style={ColorModalStyle.inner}>
        <TouchableOpacity
          style={[
            ColorModalStyle.colorPalete,
            ColorModalStyle.danger,
          ]}></TouchableOpacity>
        <TouchableOpacity
          style={[
            ColorModalStyle.colorPalete,
            ColorModalStyle.success,
          ]}></TouchableOpacity>
        <TouchableOpacity
          style={[
            ColorModalStyle.colorPalete,
            ColorModalStyle.coral,
          ]}></TouchableOpacity>
        <TouchableOpacity
          style={[
            ColorModalStyle.colorPalete,
            ColorModalStyle.primary,
          ]}></TouchableOpacity>
        <TouchableOpacity
          style={[
            ColorModalStyle.colorPalete,
            ColorModalStyle.warning,
          ]}></TouchableOpacity>
      </View>
    </View>
  );
};

export default ColorModal;
