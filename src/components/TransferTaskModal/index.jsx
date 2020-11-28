import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
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
);

TransferTaskModal.defaultProps = {
  isOpen: false,
};

TransferTaskModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    boardId: PropTypes.number.isRequired,
  })).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default TransferTaskModal;
