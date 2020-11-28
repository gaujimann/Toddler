import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import ListsList from '../ListsList';

const TransferTaskModal = ({ isOpen, closeModal, lists, onPress }) => {
  const [selected, setSelected] = React.useState({ id: 0, name: '' });
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <View style={styles.caption}>
        <Text style={styles.captionText}>Move Task</Text>
      </View>
      <ListsList
        onLongPress={() => {}}
        lists={lists}
        selectedLists={[selected.id]}
        onPress={(id, name) => setSelected({ id, name })}
      />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            onPress(selected.id, selected.name);
            closeModal();
          }}
          style={[styles.button, styles.acceptView]}
          disabled={selected.id === 0}
        >
          <Text style={[styles.textAccept, selected.id === 0 ? { color: 'rgba(155, 155, 155, 0.5)' } : {}]}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeModal} style={styles.button}>
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
};

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
