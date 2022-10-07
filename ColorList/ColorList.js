import React, {useState} from 'react';
import {Alert, Button, FlatList, Text, TextInput, View} from 'react-native';
import List from './List';
import Values from 'values.js';
const ColorList = () => {
  const [color, setColor] = useState('#000000');
  const [list, setList] = useState(new Values('#000000').all(10));
  const [error, setError] = useState(false);
  const onSubmit = () => {
    try {
      const newColors = new Values(color).all(10);
      setError(false);
      setList(newColors);
      print("Ancy")
    } catch (ex) {
      setError(true);
      console.log(ex);
    }
  };
  return (
    <View>
      <Text style={{fontWeight: 'bold', color: 'black', fontSize: 25}}>
        Color Generator
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderRadius: 5,
          borderColor: 'grey',
          borderWidth: 1,
          margin: 5,
        }}>
        <TextInput
          placeholder="#123456"
          value={color}
          style={{
            borderColor: error ? 'red' : 'gray',
            borderWidth: 1,
            flex: 0.7,
          }}
          onChangeText={text => setColor(text)}
        />
        <Text
          style={{
            color: 'black',
            backgroundColor: '#24A0ED',
            textAlignVertical: 'center',
            textAlign: 'center',
            flex: 0.3,
          }}
          onPress={() => {
            onSubmit(color);
          }}>
          Submit
        </Text>
      </View>
      <View> 
      <List list={list}/>
      </View>
    </View>
  );
};
export default ColorList;
