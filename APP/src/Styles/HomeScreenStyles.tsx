import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    height: 50,
  },
  level: {
    height: 90,
    borderTopWidth: 2,
    borderTopColor: '#90a4ae',
  },
  questHome: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: '#90a4ae',
  },
  questTopView: {
    height: 80,
  },
  questTopText: {
    marginTop: 0,
    marginLeft: 10,
    fontSize: 24,
    fontFamily: 'NotoSansKR-Bold',
  },
  questMiddleView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  questAvatarView: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  questAvatar: {
    width: 100,
    height: 200,
  },
  questButtonView: {
    flex: 0.5,
    width: '80%',
    justifyContent: 'flex-start',
    //alignItems: 'center',
  },
});
