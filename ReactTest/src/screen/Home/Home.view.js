

import React from 'react';

import {Wrapper, UserInfo, HeaderView, Profile, HeaderProfile, Line, Info, Avatar } from './Home.styles'

const HomeView = (props) => {
  return (
    <Wrapper>
      <UserInfo>
        <HeaderView/>
        <Profile>
          <HeaderProfile>
            <Line/>
            <Avatar/>
          </HeaderProfile>
          <Info></Info>
        </Profile>
      </UserInfo>
    </Wrapper>
  );
}


export default HomeView