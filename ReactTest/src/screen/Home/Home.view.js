

import React, { useEffect, useState } from 'react'
import { Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import {
  isEmpty
} from 'ramda'

import ASSETS from '../../assets'
import { triggerTabs } from './Home.handle'

import { Wrapper, UserInfo, HeaderView, Profile, HeaderProfile, Line, Info, AvatarView, Avatar } from './Home.styles'


// const { HEIGHT, WIDTH } = Dimensions.get('window');


const renderCard = (card, cardIndex) => {

  const { user } = card

  let currentTab = {
    name: 'LOCATION',
    title: '',
    content: ''
  }
  return (
    <Profile key={`user-${cardIndex}`}>
      <HeaderProfile>
        <Line />
        <AvatarView>
          <Avatar source={{ uri: card.user.picture }} />
        </AvatarView>
      </HeaderProfile>
      <Info>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text style={{ color: '#959299', fontSize: 18 }}>My address is</Text>
          <Text style={{ color: 'rgba(44, 46, 49, 0.9)', fontSize: 24, fontWeight: '700', marginTop: 3 }}>{user.location.street}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
          {ASSETS.bottomTabs.map((tab, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => triggerTabs({ name: tab.name, user })}>
                <Image style={{ width: 40, height: 40, margin: 5 }} resizeMode='contain' source={tab.icon} />
              </TouchableOpacity>
            )
          })}
        </View>
      </Info>
    </Profile>
  );
}
const HomeView = (props) => {
  const { loading, users, getRandomUser } = props


  useEffect(() => {
    if (isEmpty(users))
      getRandomUser()
  });


  return (
    <Wrapper>
      <UserInfo>
        {
          (!loading && !isEmpty(users)) && <Swiper
            cards={users}
            renderCard={(card, cardIndex) => renderCard(card, cardIndex)}
            onSwiped={(cardIndex) => { console.log(cardIndex) }}
            cardIndex={0}
            cardVerticalMargin={0}
            cardHorizontalMargin={0}
            backgroundColor='rgba(236, 236, 236, 1)'
            disableBottomSwipe={true}
            disableTopSwipe={true}
          />
        }
      </UserInfo>
    </Wrapper>
  );
}


export default HomeView