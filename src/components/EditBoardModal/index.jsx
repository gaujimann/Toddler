import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import NameTextInput from '../TextInputName';
import { takePhoto, selectFromCameraRoll } from '../../services/imageServices';

const EditBoardModal = ({
 isOpen, closeModal, edit, currentName, currentPhoto
}) => {
  const [value, setValue] = React.useState('');
  const [photo, setPhoto] = React.useState('');

  React.useEffect(() => {
    setValue(currentName);
  }, [currentName, setValue]);

  React.useEffect(() => {
    setPhoto(currentPhoto);
  }, [currentPhoto, setPhoto]);
  
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <Text style={styles.captionText}>Edit Board</Text>
      <TouchableOpacity style={styles.textInput}>
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
      <TouchableOpacity onPress={async () => {
        const p = await selectFromCameraRoll();
        setPhoto(p);
      }}
      >
        <Entypo style={styles.icon} name="image" />
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            edit(value, photo);
            setPhoto('');
            setValue('')
            closeModal();
          }}
          style={[styles.button, styles.acceptView]}
        >
          <Text style={styles.textAccept}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setValue('');
            setPhoto('');
            closeModal('');
          }}
          style={styles.button}
        >
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
};

export default EditBoardModal;
