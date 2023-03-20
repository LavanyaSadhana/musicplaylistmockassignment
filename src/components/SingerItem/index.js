import './index.css'

const SingerItem = props => {
  const {singerDetails, deleteUser} = props
  const {id, imageUrl, name, genre, duration} = singerDetails

  const onDeleteUser = () => {
    deleteUser(id)
  }
  return (
    <>
      <li className="list-item-container">
        <div className="first">
          <img src={imageUrl} alt="track" className="img" />
          <div className="name-container">
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="duration-container">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="delete-button"
            onClick={onDeleteUser}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="browser-delete-icon"
            />
          </button>
        </div>
      </li>
    </>
  )
}
export default SingerItem
