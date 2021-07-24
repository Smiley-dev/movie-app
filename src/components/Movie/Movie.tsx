import React, {useEffect, useCallback, useState} from 'react'

//API
import API, { MovieDetails} from '../../API'

type Props = {
      imdbID: string
}

const Movie:React.FC<Props> = ({imdbID}) => {
      const [movie, setMovie] = useState<MovieDetails>()

      const fetchMovie = useCallback(async () => {
            try {
                  const movie = await API.fetchMovie(imdbID)
                  setMovie(movie)
            } catch (error) {
                  console.log(error)
            }
      }, [imdbID])

      useEffect(() => {
            fetchMovie()

      }, [fetchMovie])

      return (
            <div>
                  Movie
            </div>
      )
}

export default Movie
