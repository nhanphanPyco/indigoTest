import { Dimensions, View, Image } from 'react-native'
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
  backgroundColor: 'blue'
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

const AvatarView = glamorous(View)({
  width: 160,
  height: 160,
  backgroundColor: color.white,
  position: 'absolute',
  left: width / 2 - 104,
  bottom: -50,
  borderRadius: 80,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: color.textGray,
  borderWidth: 1,
})

const Avatar = glamorous(Image)({
  width: 150,
  height: 150,
  borderRadius: 75
})

const Line = glamorous(View)({
  width: '100%',
  height: 1,
  backgroundColor: color.textGray,
})

const Info = glamorous(View)({
  width: '100%',
  height: '40%',
})

const styles = {

}


export { Wrapper, UserInfo, HeaderView, Profile, HeaderProfile, Line, Info, AvatarView, Avatar }