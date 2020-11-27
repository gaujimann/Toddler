import React, { Component } from 'react';
import { TextInput } from 'react-native';

const NameTextInput = ({ value, setValue }) => (
  <TextInput
    placeholder="Enter Board Name"
    style={{ height: 40 }}
    onChangeText={setValue}
    value={value}
  />
)

export default NameTextInput;
