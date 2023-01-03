import './index.css'
import {Component} from 'react'

class BrowserSearchItems extends Component {
  render() {
    const {historyList, deleteList} = this.props
    const {timeAccessed, logoUrl, title, domainUrl, id} = historyList
    const onDelete = () => {
      deleteList(id)
    }
    return (
      <li className="history-list-container">
        <p> {timeAccessed} </p>
        <div className="title-container">
          <img className="logo" src={logoUrl} alt="domain logo" />
          <p className="title"> {title} </p>
          <p className="url"> {domainUrl} </p>
        </div>
        <button
          data-testid="delete"
          className="delete-button"
          type="button"
          onClick={onDelete}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default BrowserSearchItems
