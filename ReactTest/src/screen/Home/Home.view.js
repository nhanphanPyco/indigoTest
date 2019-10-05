

import React, { useEffect } from 'react'
import Swiper from 'react-native-deck-swiper'

import {
  isEmpty
} from 'ramda'

import Loading from '../../components/Loading/Loading.component'
import OfflineComponent from '../../components/OfflineComponent/Offline.component'

import { Wrapper, UserInfo, HeaderView, Carousel } from './Home.styles'
import ProfileComponent from './Profile.component'


const HomeView = (props) => {
  const { loading, users, getRandomUser, isConnected } = props


  useEffect(() => {
    if (isEmpty(users) && isConnected)
      getRandomUser()
  });


  return (
    <Wrapper>
      <UserInfo>
        <HeaderView />
        {!isConnected && <OfflineComponent />}
        <Carousel>
          {loading && <Loading />}
          {
            (!loading && !isEmpty(users)) && <Swiper
              cards={users}
              renderCard={card => <ProfileComponent card={card} />}
              cardIndex={0}
              cardVerticalMargin={0}
              cardHorizontalMargin={0}
              backgroundColor='transparent'
              disableBottomSwipe={true}
              disableTopSwipe={true}
              onSwipedLeft={() => getRandomUser()}
              onSwipedRight={() => getRandomUser('ADD')}
            />
          }
        </Carousel>
      </UserInfo>
    </Wrapper>
  );
}


export default HomeView