import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Modal from '../Modal';
import NameTextInput from '../TextInputName';
import styles from './styles';

const AddListModal = ({ isOpen, closeModal, addList }) => {
  const [name, setName] = React.useState('');
  const [color, setColor] = React.useState('');

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <TouchableOpacity style={[styles.textInput, styles.bottomLine]}>
        <NameTextInput
          name={name}
          setName={setName}
          placeHolder="Enter List Name"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.textInput}>
        <NameTextInput
          color={color}
          setColor={setColor}
          placeHolder="Enter Color Code"
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            addList(name, color);
            setName('');
            setColor('');
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

export default AddListModal;
