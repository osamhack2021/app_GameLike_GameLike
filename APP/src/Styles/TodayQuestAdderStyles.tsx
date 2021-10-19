import {StyleSheet} from 'react-native';

export const todayQuestAdderStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topText: {
    marginTop: 0,
    marginLeft: 5,
    fontSize: 20,
    fontFamily: 'NotoSansKR-Bold',
  },

  topView: {
    width: '100%',
    height: 80,
  },

  tcoView: {
    width: '80%',
    height: 50,
  },

  textInput: {
    borderWidth: 1,
    marginVertical: 3,
  },

  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 1},
});
