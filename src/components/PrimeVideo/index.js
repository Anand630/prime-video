import MoviesSlider from '../MoviesSlider'
import './index.css'

const movieTypeConstants = {
  action: 'ACTION',
  comedy: 'COMEDY',
}

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === movieTypeConstants.action,
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === movieTypeConstants.comedy,
  )
  // console.log(actionMovies, comedyMovies)
  return (
    <div className="prime-video-home-container">
      <img
        className="banner"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="prime-video-bottom-container">
        <h1 className="movie-type-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
        <h1 className="movie-type-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
