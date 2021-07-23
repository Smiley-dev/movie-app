import React, {useCallback, useEffect, useState} from 'react'

//API
import API, { Movies} from '../../API'

const Home:React.FC = () => {
      const [movies, setMovies] = useState<Movies>()

      const fetchMovies = useCallback(
            async () => {
                  try {
                        const movies = await API.fetchMovies("star", 1)
                        setMovies(movies)
                  } catch (error) {
                        console.log(error)
                  }
            }, []
      )

      useEffect(() => {
            fetchMovies()
      }, [fetchMovies])

      return (
            <div>
                  {movies?.Search.map((movie) => {
                        return <div>{movie.Title}</div>
                  })}
            </div>
      )
}

export default Home
