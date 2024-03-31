import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import createStyles from './style';
import {Product} from '../../utils/types';

interface Props {
  item: Product;
  level: number;
  onCheck: (item: Product, isChecked: boolean) => void;
  checkedItems: number[];
}

const TreeItem: React.FC<Props> = ({item, level, onCheck, checkedItems}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    onCheck(item, !isChecked);
  };

  const {container, itemContainer, textContainer} = createStyles(level);

  return (
    <View style={container}>
      <View style={itemContainer}>
        <CheckBox
          value={checkedItems.includes(item.id)}
          onValueChange={handleCheck}
          boxType="square"
        />
        <TouchableOpacity style={textContainer} onPress={handleCheck}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
      {item.children && item.children.length > 0 && (
        <FlatList
          data={item.children}
          renderItem={({item}) => (
            <TreeItem
              item={item}
              level={level + 1}
              onCheck={onCheck}
              checkedItems={checkedItems}
            />
          )}
          keyExtractor={child => child.id.toString()}
        />
      )}
    </View>
  );
};

export default TreeItem;
