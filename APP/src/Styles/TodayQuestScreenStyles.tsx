import {StyleSheet} from 'react-native';

export const todayQuestScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  topView: {
    width: '100%',
    height: 150,
  },
  middleView: {
    flex: 1,
    backgroundColor: '#333333',
  },
  bottomView: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
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

  tco: {height: 50, width: '100%', borderWidth: 1},
});
