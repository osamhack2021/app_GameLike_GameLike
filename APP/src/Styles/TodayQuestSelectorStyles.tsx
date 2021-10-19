import {StyleSheet} from 'react-native';

export const todayQuestSelectorStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topView: {
    width: '100%',
    height: 80,
  },
  middleView: {
    flex: 1,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#333333',
  },
  bottomView: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
  },

  tcoView: {
    width: '80%',
    height: 50,
  },

  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    borderWidth: 1,
    marginVertical: 3,
  },

  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 1},
});
