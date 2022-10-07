import React, {useState} from 'react';

import {FlatList, Text, View, TouchableOpacity, Dimensions, Alert, ToastAndroid} from 'react-native';

import Clipboard from '@react-native-community/clipboard';

const ListView = ({list}) => {
  console.log(list);
  const [copiedText, setCopiedText] = useState('');
  const [numCols, setColumnNo] = useState(2);
  var width = Dimensions.get('window').width / 2;
  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const Item = ({index, item, onPress}) => {
    console.log('item', item);
    const hexValue = rgbToHex(item.rgb[0], item.rgb[1], item.rgb[2]);
    console.log('index', hexValue);
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{backgroundColor: hexValue, width: width, height: width}}>
        <Text fontSize="lg" style={{color: index < 10 ? '#000' : '#FFF'}}>
          {item.weight}%
        </Text>
        <Text fontSize="lg" style={{color: index < 10 ? '#000' : '#FFF'}}>
          {hexValue}
        </Text>
      </TouchableOpacity>
    );
  };
  const copyToClipboard = (selectedcolor) => {
    Clipboard.setString(selectedcolor);
    Alert.alert("Copied to Clipboard", selectedcolor)
  };
  const renderItem = ({index, item, onPress}) => {
    const hexValue = rgbToHex(item.rgb[0], item.rgb[1], item.rgb[2]);
    return <Item item={item} index={index} onPress={()=>copyToClipboard(hexValue)} />;
    
  };

  return (
    <View style={{marginBottom: 20}}>
      <FlatList
        data={list}
        renderItem={renderItem}
        listKey={item => item.id}
        key={numCols}
        numColumns={numCols}
        scrollEnabled
        style={{marginBottom: width}}
      />
    </View>
  );
};

export default ListView;
