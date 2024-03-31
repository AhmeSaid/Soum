import {StyleSheet} from 'react-native';

const createStyles = (level: number) =>
  StyleSheet.create({
    container: {
      marginLeft: level * 20,
      marginTop: 8,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    textContainer: {marginLeft: 4},
  });

export default createStyles;
