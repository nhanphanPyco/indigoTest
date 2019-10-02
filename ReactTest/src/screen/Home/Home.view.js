

import React from 'react'
import { Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
import Swiper from 'react-native-deck-swiper'

import { Wrapper, UserInfo, HeaderView, Profile, HeaderProfile, Line, Info, AvatarView, Avatar } from './Home.styles'

const { HEIGHT, WIDTH } = Dimensions.get('window');


const data = [{
  gender: "male",
  name: {
    title: "mr",
    first: "ian",
    last: "martin"
  },
  location: {
    street: "6071 dogwood ave",
    city: "richmond",
    state: "pennsylvania",
    zip: "78947"
  },

  picture: "http://api.randomuser.me/portraits/men/48.jpg"
},
{
  gender: "female",
  name: {
    title: "ms",
    first: "Hanh",
    last: "Dang"
  },
  location: {
    street: "Phu Bai",
    city: "Hue",
    state: "pennsylvania",
    zip: "78913"
  },

  picture: "http://api.randomuser.me/portraits/men/60.jpg"
},
{
  gender: "male",
  name: {
    title: "mr",
    first: "Nhan",
    last: "Phan"
  },
  location: {
    street: "sai gon",
    city: "Sg",
    state: "pennsylvania",
    zip: "78914"
  },

  picture: "http://api.randomuser.me/portraits/men/56.jpg"
}]

const renderCard = (card) => {
  console.log('object: ', card);
  return (
    <Profile>
      <HeaderProfile>
        <Line />
        <AvatarView>
          <Avatar source={{ uri: 'http://indongbac.com/uploads/images/mau-background-don-gian-01-768x480.jpg' }} />
        </AvatarView>
      </HeaderProfile>
      <Info>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#959299', fontSize: 16 }}>My address is</Text>
          <Text style={{ color: 'rgba(44, 46, 49, 0.9)', fontSize: 24, marginTop:5 }}>6071 dogwood ave</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </Info>
    </Profile>
  );
}
const HomeView = (props) => {
  return (
    <Wrapper>
      <UserInfo>
        <Swiper
          cards={data}
          renderCard={card => renderCard(card)}
          onSwiped={(cardIndex) => { console.log(cardIndex) }}
          cardIndex={0}
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          backgroundColor='rgba(236, 236, 236, 1)'
          disableBottomSwipe={true}
          disableTopSwipe={true}
        />
      </UserInfo>
    </Wrapper>
  );
}


export default HomeView