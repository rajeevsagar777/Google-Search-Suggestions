import {Component} from 'react'

import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  showClickedItem = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const isSearchedValue = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="google-card-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="input-el"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="list-container">
            {isSearchedValue.map(eachItem => (
              <SuggestionItem
                suggestionEl={eachItem}
                key={eachItem.id}
                showClickedItem={this.showClickedItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
