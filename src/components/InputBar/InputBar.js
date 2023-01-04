import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './InputBar.styles';

const InputBar = ({text, setText, add}) => {
  const [btnStyle, setBtnStyle] = useState(false);
  // render
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        onFocus={() => setBtnStyle(true)}
        onBlur={() => setBtnStyle(false)}
        style={styles.txtInput}
        placeholderTextColor={'#fff'}
        placeholder="To Do.."
      />
      <TouchableOpacity
        onPress={add}
        style={!btnStyle ? styles.kaydetBtn : styles.kaydetBtnActive}>
        <Text style={styles.kaydetBtnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputBar;
