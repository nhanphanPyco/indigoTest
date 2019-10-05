import { Dimensions, ScrollView, View, Image, Text } from 'react-native'
import glamorous from 'glamorous-native'

import color from '../../themes/colors'

const { width } = Dimensions.get('window');

const Wrapper = glamorous(ScrollView)({
  flex: 1,
})

const Header = glamorous(View)({
  justifyContent: 'center',
  alignItems: 'center',
  height: 80,
  width: width,
  marginTop:25,
})

const MyFavourite = glamorous(View)({
  alignItems: 'center',
  flexDirection: 'row',
  height: 100,
  width: width,
  marginTop:5,
  borderTopWidth:1,
  borderBottomWidth:1,
  borderColor:color.whiteGray,
  padding: 10
})

const Title = glamorous(Text)({
  fontWeight:'900', 
  fontSize:24,
  color: color.black
})

const Avatar = glamorous(Image)({
  width: 80,
  height: 80,
  borderRadius: 35,
  marginRight: 20
})

const Name = glamorous(Text)({
  fontWeight:'700', 
  fontSize:18,
  color: color.gray
})

export { Wrapper, MyFavourite, Header, Title, Avatar, Name }