import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
}

const MoviesSlider = props => {
  const {moviesList} = props
  console.log(props)
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <MovieItem movieDetails={eachMovie} key={eachMovie.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
