import React, { Component } from 'react';
import { TextInput } from 'react-native';

const NameTextInput = ({ value, setValue }) => (
  <TextInput
    placeholder="Board name"
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    onChangeText={setValue}
    value={value}
  />
)

export default NameTextInput;
