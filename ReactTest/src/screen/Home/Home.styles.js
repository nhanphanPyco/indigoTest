import { Dimensions, View } from 'react-native'
import glamorous from 'glamorous-native'

import color from '../../themes/colors'

const { height, width } = Dimensions.get('window');

const Wrapper = glamorous(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

const UserInfo = glamorous(View)({
  width: width - 32,
  height: width,
  backgroundColor: color.whiteGray
})

const HeaderView = glamorous(View)({
  width: '100%',
  height: '20%',
  backgroundColor: color.black
})

const Profile = glamorous(View)({
  position: 'absolute',
  width: width - 48,
  height: width - 40,
  top: 20,
  left: 8,
  backgroundColor: color.white,
  justifyContent: 'space-between',
})

const HeaderProfile = glamorous(View)({
  width: '100%',
  height: '30%',
  backgroundColor: color.whiteGray,
  justifyContent: 'flex-end',
})

const Avatar = glamorous(View)({
  width: 120,
  height: 120,
  backgroundColor: color.green,
  position: 'absolute',
  left: width/2-84,
  bottom: -30,
  borderRadius:60
})

const Line = glamorous(View)({
  width: '100%',
  height: 1,
  backgroundColor: color.textGray,
})

const Info = glamorous(View)({
  width: '100%',
  height: '45%',
  backgroundColor: color.green
})


export { Wrapper, UserInfo, HeaderView, Profile, HeaderProfile, Line, Info, Avatar }