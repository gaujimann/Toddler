import React from 'react';
import { Entypo } from '@expo/vecto-icons';
import { TouchableOpacity, TextInput } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import UselessTextInput from '../TextInputName';

const AddModal = ({ isOpen, closeModal, takePhoto, selectFromCameraRoll })
=> (
  <Modal
    isOpen={ isopen }
    closeModal={closeModal}>
    <TouchableOpacity onPress={takePhoto}>
      <Entypo style={styles.icon} name="camera"/>
    </TouchableOpacity>
    <TouchableOpacity onPress={takePhoto}>
      <Entypo style={styles.icon} name="iamge"/>
    </TouchableOpacity>
    <TouchableOpacity>
      <UselessTextInput/>
    </TouchableOpacity>

  </Modal>
)
