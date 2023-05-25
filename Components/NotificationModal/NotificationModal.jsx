import {View, Text, Modal} from 'react-native';
import React from 'react';
import {styles} from './style';

const NotificationModal = ({notificationTitle}) => {
  return (
    <View>
      <Modal transparent visible={true}>
        <View style={styles.outer}>
          <View style={styles.inner}>
            <Text style={styles.txt}>{notificationTitle}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NotificationModal;
