import React, { Component } from 'react'
import CreatePlayer from './CreatePlayer'

export default class CreatePlayerForm extends Component {
  state = {
    site: 'comeon',
    franchise: 'se',
    currency: 'SEK',
    url: '.cleverdolphin.se/rest/register/player'
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
  setCurrency (e) {
    this.setState({
      currency: e.target.value
    })
  }

  setUrl (e) {
    this.setState({
      url: e.target.value
    })
  }

  render () {
    return (
      <div>
        <div>
          <h3>
            {this.state.site} {this.state.franchise} {this.state.currency}{' '}
            {this.state.url}
          </h3>
        </div>
        <div>
          <label htmlFor='siteForm'>Choose a Site: </label>
          <select
            name='siteForm'
            id='siteForm'
            onChange={this.setSite.bind(this)}
          >
            <option value='comeon'>Comeon</option>
            <option value='mobilebet'>Mobilebet</option>
          </select>
        </div>
        <div>
          <label htmlFor='franchiseForm'>Choose a franchise: </label>
          <select
            name='franchiseForm'
            id='franchiseForm'
            onChange={this.setFranchise.bind(this)}
          >
            <option value='se'>Sweden</option>
            <option value='fi'>Finland</option>
          </select>
        </div>
        <div>
          <label htmlFor='currencyForm'>Choose a currency: </label>
          <select
            name='currencyForm'
            id='currencyForm'
            onChange={this.setCurrency.bind(this)}
          >
            <option value='SEK'>SEK</option>
            <option value='EUR'>EUR</option>
          </select>
        </div>
        <div>
          <label htmlFor='environmentForm'>Choose a environment: </label>
          <select
            name='environmentForm'
            id='environmentForm'
            onChange={this.setUrl.bind(this)}
          >
            <option value='.cleverdolphin.se/rest/register/player'>
              staging
            </option>
          </select>
        </div>

        <div>
          <button
            onClick={e =>
              CreatePlayer(
                this.state.site,
                this.state.franchise.toUpperCase(),
                this.state.currency.toUpperCase(),
                this.state.url
              )
            }
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}
