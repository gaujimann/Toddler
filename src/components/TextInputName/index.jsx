import React, { Component } from 'react';
import { TextInput } from 'react-native';

const NameTextInput = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      placeholder="Board name"
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
}

export default NameTextInput;
