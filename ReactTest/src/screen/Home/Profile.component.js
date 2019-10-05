
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import ASSETS from '../../assets'
import constants from '../../constants'

import { Profile, HeaderProfile, Line, Info, AvatarView, Avatar, IconTab, BottomTabs, Detail, styles } from './Home.styles'

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: 'LOCATION',
      content: props.card.user.location.street || '',
      title: 'My Password is',
      picture: props.card.user.picture || '',
      seed: props.card.seed
    }
  }
  setTabName = (name) => {
    const { TABS } = constants
    const { user } = this.props.card
    let title = ''
    let content = ''

    if (name === TABS.ACCOUNT) {
      title = 'My Account is'
      content = user.username
    }
    else if (name === TABS.BIRTHDAY) {
      title = 'My Birthday is'
      content = user.name.last
    }
    else if (name === TABS.PHONE) {
      title = 'My Phone is'
      content = user.phone
    }
    else if (name === TABS.PASSWORD) {
      title = 'My Password is'
      content = user.password
    }
    else {
      title = 'My Address is'
      content = user.location.street
    }

    this.setState({
      tabName: name,
      title,
      content
    })
  }

  render() {
    const { tabName, content, title, picture, seed } = this.state

    return (
      <Profile key={`user-${seed}`}>
        <HeaderProfile>
          <Line />
          <AvatarView>
            <Avatar source={{ uri: picture }} />
          </AvatarView>
        </HeaderProfile>
        <Info>
          <Detail>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.detailContent}>{content}</Text>
          </Detail>
          <BottomTabs>
            {ASSETS.bottomTabs.map((tab, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => this.setTabName(tab.name)}>
                  <IconTab
                    resizeMode='contain'
                    source={tabName === tab.name ? tab.iconActive : tab.icon}
                  />
                </TouchableOpacity>
              )
            })}
          </BottomTabs>
        </Info>
      </Profile>
    )
  }
}

export default ProfileComponent