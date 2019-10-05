import { Dimensions, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import glamorous from 'glamorous-native'

import color from '../../themes/colors'

const { height, width } = Dimensions.get('window');

const Wrapper = glamorous(SafeAreaView)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

const UserInfo = glamorous(View)({
  width: width - 32,
  height: width,
  backgroundColor: 'rgba(236, 236, 236, 1)',
})

const Carousel = glamorous(View)({
  width: width - 48,
  height: width - 40,
  position: 'absolute',
  top: 20,
  left: 8,
})

const HeaderView = glamorous(View)({
  width: '100%',
  height: '30%',
  backgroundColor: color.black
})

const Profile = glamorous(View)({
  width: width - 48,
  height: width - 40,
  backgroundColor: color.white,
  justifyContent: 'space-between',
})

const HeaderProfile = glamorous(View)({
  width: '100%',
  height: '35%',
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
  height: '45%',
})

const BottomTabs = glamorous(TouchableOpacity)({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
})

const IconTab = glamorous(Image)({
  width: 40,
  height: 40,
  margin: 5
})

const Detail = glamorous(View)({
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center'
})


const styles = {
  title: {
    color: '#959299', fontSize: 18
  },
  detailContent: {
    color: 'rgba(44, 46, 49, 0.9)', fontSize: 24, fontWeight: '700', marginTop: 3
  }
}


export { Wrapper, Carousel, UserInfo, HeaderView, Profile, HeaderProfile, Line, Info, AvatarView, Avatar, IconTab, BottomTabs, Detail, styles }