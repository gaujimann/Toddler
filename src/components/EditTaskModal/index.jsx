import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Modal from '../Modal';
import NameTextInput from '../TextInputName';
import styles from './styles';

const EditTaskModal = ({
 isOpen, closeModal, edit, currentName, currentColor
}) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

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
        <Text style={styles.captionText}>Edit List</Text>
      </View>
      <TouchableOpacity style={[styles.textInput, styles.bottomLine]}>
        <NameTextInput
          value={name}
          setValue={setName}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.textInput}>
        <NameTextInput
          value={description}
          setValue={setDescription}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            edit(name, description);
            setName('');
            setDescription('');
            closeModal();
          }}
          style={[styles.button, styles.acceptView]}
        >
          <Text style={styles.textAccept}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeModal} style={styles.button}>
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default EditTaskModal;
