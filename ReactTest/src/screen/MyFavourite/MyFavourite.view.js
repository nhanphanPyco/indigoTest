

import React from 'react'

import constants from '../../constants'

import { Wrapper, MyFavourite, Header, Title, Avatar, Name } from './MyFavourite.styles'

const MyFaVouriteView = (props) => {
  const { myFavourite } = props
  return (
    <Wrapper>
      <Header>
        <Title>{constants.MY_FAVOURITE}</Title>
      </Header>
      {myFavourite.map((item, index) => {
        const {picture, name: { first, last} } = item.user

        return (
          <MyFavourite key={index}>
            <Avatar source={{ uri: picture }} />
            <Name>{first} {last}</Name>
          </MyFavourite>
        )
      })}
    </Wrapper>
  );
}


export default MyFaVouriteView