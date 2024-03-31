import React from 'react';
import {FlatList} from 'react-native';
import TreeItem from '../TreeItem';
import {Product} from '../../utils/types';

interface Props {
  data: Product[];
  onCheck: (item: Product, isChecked: boolean) => void;
  checkedItems: number[];
}

const TreeView: React.FC<Props> = ({data, onCheck, checkedItems}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <TreeItem
          item={item}
          level={0}
          onCheck={onCheck}
          checkedItems={checkedItems}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TreeView;
