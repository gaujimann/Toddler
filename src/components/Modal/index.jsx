import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text } from 'react-native';
import styles from './styles';

const Modal = ({ isOpen, closeModal, title, children }) => {
  <NativeModal
    isVisable={isOpne}
    hasbackdrop
    onBackBubttonpress={closeModal}
    onSwipeComplete={closeModal}
    swipeDirection={['up','down']}
    style={styles.modal}>
    <View styel={styles.body}>
      <Text>{ title }</Text>
      { children }
    </View>
  </NativeModal>
};

Modal.propTypes = {
  isOpne: PropType.bool.isRequired,
  closeModal: PropType.func.isRequired,
  title: PropType.string,
  children: PropType.niode.isRequired,
};

Modal.default = {
  title: '',
};

export default Modal;
