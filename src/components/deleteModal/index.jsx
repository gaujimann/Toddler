import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const DeleteModal = ({ isOpen, closeModal, remove }) => (
  <Modal
    isOpen={isOpen}
    closeModal={closeModal}>
    <Text style={styles.caption}>Delete Selected?</Text>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          remove()
          closeModal()
        }}
      >
        <Text style={styles.textAccept}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={closeModal}>
        <Text style={styles.textCancel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

export default DeleteModal;
