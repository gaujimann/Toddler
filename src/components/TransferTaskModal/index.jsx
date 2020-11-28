import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import ListsList from '../ListsList';

const TransferTaskModal = ({ isOpen, closeModal, lists, onPress }) => (
  <Modal
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <Text>Move Task</Text>
    <ListsList
      onLongPress={() => {}}
      lists={lists}
      selectedLists={[]}
      onPress={onPress}
    />
  </Modal>
)

export default TransferTaskModal;
