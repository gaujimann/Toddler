import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import NameTextInput from '../TextInputName';

const AddModal = ({ isOpen, closeModal, takePhoto, selectFromCameraRoll }) => (
  <Modal
    isOpen={isOpen}
    closeModal={closeModal}>
    <TouchableOpacity onPress={takePhoto}>
      <Entypo style={styles.icon} name="camera" />
    </TouchableOpacity>
    <TouchableOpacity onPress={selectFromCameraRoll}>
      <Entypo style={styles.icon} name="iamge" />
    </TouchableOpacity>
    <TouchableOpacity>
      <NameTextInput />
    </TouchableOpacity>

  </Modal>
);
export default AddModal;
