import React, { Component, useState } from 'react'

export default class CreatePlayer extends Component {
  state = {
    site: 'comeon',
    franchise: 'se'
  }

  setSite (e) {
    this.setState({
      site: e.target.value
    })
  }
  setFranchise (e) {
    this.setState({
      franchise: e.target.value
    })
  }

  render () {
    return (
      <div>
        <div>
          {this.state.site} {'  '} {this.state.franchise}
        </div>

        <label for='site'>Choose a Site: </label>
        <select name='site' id='site' onChange={this.setSite.bind(this)}>
          <option value='comeon'>Comeon</option>
          <option value='mobilebet'>Mobilebet</option>
        </select>

        <label for='franchise'>Choose a franchise: </label>
        <select
          name='franchise'
          id='franchise'
          onChange={this.setFranchise.bind(this)}
        >
          <option value='se'>Sweden</option>
          <option value='fi'>Finland</option>
        </select>
      </div>
    )
  }
}
