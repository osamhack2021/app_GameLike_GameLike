import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    height: 80,
  },
  level: {
    height: 90,
    borderTopWidth: 2,
    borderTopColor: '#90a4ae',
  },
  questHome: {
    flex: 1,
    backgroundColor: '#fff9c4',
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
    width: 50,
    height: 100,
    marginBottom: 30,
  },
  questButtonView: {
    flex: 0.5,
    width: '80%',
    justifyContent: 'flex-start',
    //alignItems: 'center',
  },
  logoutView: {
    width: 200,
    height: 50,
  },
});
