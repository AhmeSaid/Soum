import React, {useState} from 'react';
import {View} from 'react-native';
import TreeView from '../../components/TreeView';
import createStyles from './style';
import {Product} from '../../utils/types';

const products: Product[] = [
  {
    id: 1,
    name: 'Mobile Phones',
    children: [
      {
        id: 101,
        name: 'Apple',
        children: [
          {
            id: 1001,
            name: 'iPhone 8',
            children: [
              {id: 10001, name: '128GB'},
              {id: 10002, name: '256GB'},
            ],
          },
          {
            id: 1002,
            name: 'iPhone X',
            children: [
              {id: 10003, name: '64GB'},
              {id: 10004, name: '256GB'},
            ],
          },
        ],
      },
      {
        id: 102,
        name: 'Samsung',
        children: [
          {
            id: 1003,
            name: 'Galaxy S20',
            children: [
              {id: 10005, name: '128GB'},
              {id: 10006, name: '256GB'},
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Watches',
    children: [
      {
        id: 103,
        name: 'Rolex',
        children: [
          {
            id: 1004,
            name: 'Submariner',
            children: [
              {id: 10007, name: 'Steel'},
              {id: 10008, name: 'Gold'},
            ],
          },
        ],
      },
    ],
  },
];

const Home: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const checkChildren = (item: Product, isChecked: boolean) => {
    if (item.children) {
      item.children.forEach(child => {
        setCheckedItems(prevState => {
          if (isChecked && !prevState.includes(child.id)) {
            return [...prevState, child.id];
          } else if (!isChecked && prevState.includes(child.id)) {
            return prevState.filter(id => id !== child.id);
          }
          return prevState;
        });
        checkChildren(child, isChecked);
      });
    }
  };

  const handleCheck = (item: Product, isChecked: boolean) => {
    checkChildren(item, isChecked);

    setCheckedItems(prevState => {
      if (isChecked && !prevState.includes(item.id)) {
        return [...prevState, item.id];
      } else if (!isChecked && prevState.includes(item.id)) {
        return prevState.filter(id => id !== item.id);
      }
      return prevState;
    });
  };

  const {container} = createStyles();

  return (
    <View style={container}>
      <TreeView
        data={products}
        onCheck={handleCheck}
        checkedItems={checkedItems}
      />
    </View>
  );
};

export default Home;
