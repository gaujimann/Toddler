import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import NameTextInput from '../TextInputName';
import { takePhoto, selectFromCameraRoll } from '../../services/imageServices';

const AddModal = ({ isOpen, closeModal, addBoard }) => {
  const [value, setValue] = React.useState('');
  const [photo, setPhoto] = React.useState('');

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}>
      <TouchableOpacity>
        <NameTextInput
          value={value}
          setValue={setValue}
        />
      </TouchableOpacity>
      <View style={styles.caption}>
        <Text style={styles.captionText}>Board thumbail</Text>
      </View>
      <TouchableOpacity onPress={async () => {
        const p = await takePhoto();
        setPhoto(p);
      }}
      >
        <Entypo style={styles.icon} name="camera" />
      </TouchableOpacity>
      <TouchableOpacity onPress={selectFromCameraRoll}>
        <Entypo style={styles.icon} name="image" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        addBoard(value, photo);
      }}>
        <Text>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={closeModal}>
        <Text>Cancel</Text>
      </TouchableOpacity>

    </Modal>
  );
}
export default AddModal;
