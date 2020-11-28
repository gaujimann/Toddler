import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import NameTextInput from '../TextInputName';
import { takePhoto, selectFromCameraRoll } from '../../services/imageServices';

const AddBoardModal = ({ isOpen, closeModal, addBoard }) => {
  const [value, setValue] = React.useState('');
  const [photo, setPhoto] = React.useState('');

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <View style={{
        borderStyle: 'solid',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
      }}
      >
        <Text style={styles.captionText}>Add Board</Text>
      </View>
      <TouchableOpacity style={styles.textInput}>
        <NameTextInput
          value={value}
          setValue={setValue}
          placeHolder="Enter Board Name"
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
            addBoard(value, photo);
            setPhoto('');
            setValue('')
            closeModal();
          }}
          style={[styles.button, styles.acceptView]}
          disabled={photo === '' || value === ''}

        >
          <Text style={[styles.textAccept, !(photo === '' || value === '') ? {} : { color: 'rgba(155, 155, 155, 0.5)' }]}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setValue('');
            setPhoto('');
            closeModal();
          }}
          style={styles.button}>
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

AddBoardModal.defaultProps = {
  isOpen: false,
};

AddBoardModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  addBoard: PropTypes.func.isRequired,
};

export default AddBoardModal;
