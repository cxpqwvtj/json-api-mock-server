import React, { Component } from 'react'

import { AppBar } from 'material-ui'

export default class Header extends Component {
  render() {
    return (
      <AppBar
        title='json-api-mock-server'
        titleStyle={{cursor: 'pointer'}}
        showMenuIconButton={false}
        onTitleTouchTap={() => window.location.pathname='/'}
      />
    )
  }
}
