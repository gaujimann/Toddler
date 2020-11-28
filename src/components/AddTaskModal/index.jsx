import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Modal from '../Modal';
import NameTextInput from '../TextInputName';
import styles from './styles';

const AddTaskModal = ({ isOpen, closeModal, addTask }) => {
  const [name, setName] = React.useState('');
  const [description, setDescreption] = React.useState('');

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
        <Text style={styles.captionText}>Add Task</Text>
      </View>
      <TouchableOpacity style={[styles.textInput, styles.bottomLine]}>
        <NameTextInput
          value={name}
          setValue={setName}
          placeHolder="Enter Task Name"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.textInput}>
        <NameTextInput
          value={description}
          setValue={setDescreption}
          placeHolder="Enter Description"
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            addTask(name, description);
            setName('');
            setDescreption('');
            closeModal();
          }}
          style={[styles.button, styles.acceptView]}
          disabled={description === '' || name === ''}
        >
          <Text style={[styles.textAccept, !(description === '' || name === '') ? {} : { color: 'rgba(155, 155, 155, 0.5)' }]}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeModal} style={styles.button}>
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default AddTaskModal;
