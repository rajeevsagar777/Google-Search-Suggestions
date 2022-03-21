import './index.css'

const SuggestionItem = props => {
  const {suggestionEl, showClickedItem} = props
  const {suggestion} = suggestionEl

  const clickedSuggestion = event => showClickedItem(event.target.value)
  return (
    <li className="list-item">
      <p className="content">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
        onClick={clickedSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
