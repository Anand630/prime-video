import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <button type="button" className="thumbnail-container">
          <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
        </button>
      }
    >
      {close => (
        <>
          <div className="pop-up-bg-container">
            <button
              // testid="closeButton"
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose height="80" width="80" />
            </button>
            <div className="video-container">
              <ReactPlayer
                url={videoUrl}
                controls
                height="440px"
                width="740px"
              />
            </div>
          </div>
        </>
      )}
    </Popup>
  )
}

export default MovieItem
