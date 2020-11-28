import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

const NameTextInput = ({ value, setValue, placeHolder }) => (
  <TextInput
    placeholder={placeHolder}
    style={{ height: 40 }}
    onChangeText={setValue}
    value={value}
  />
);

NameTextInput.defaultProps = {
  placeHolder: '',
}

NameTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
};

export default NameTextInput;
