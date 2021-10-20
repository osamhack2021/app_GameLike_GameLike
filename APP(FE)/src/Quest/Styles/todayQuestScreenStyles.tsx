import {StyleSheet} from 'react-native';

export const todayQuestScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },

  topView: {
    marginTop: 20,
    width: '100%',
    height: 150,
  },
  middleView: {
    flex: 1,
  },
  bottomView: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  tcoView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tco: {height: 50, width: '100%', borderWidth: 1},
  questAddButton: {
    margin: 10,
    backgroundColor: '#2ecc71',
    height: 50,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questAddText: {
    color: 'white',
    fontSize: 16,
  },

  endButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
