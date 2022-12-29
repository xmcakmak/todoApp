import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  active: {
    flex: 1,
    backgroundColor: '#64ae51',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    margin: 5,
  },
  

  title: {
    fontSize: 20,
    color: '#fff',
  },
  titlePassive: {
    color: '#ccc',
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
  passive: {
    flex: 1,
    backgroundColor: '#31474f',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    margin: 5,
  },
  hold: {
    opacity: 0.5,
  },
});
