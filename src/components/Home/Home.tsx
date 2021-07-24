import React, {useCallback, useEffect, useState} from 'react'

//API
import API, { Movies} from '../../API'

//Styles
import {Wrapper, SearchBackground, Search} from './Home.style'


const Home:React.FC = () => {
      const [movies, setMovies] = useState<Movies>()
      const [searchTerm, setSearchTerm] = useState<string>("")

      const fetchMovies = useCallback(
            async (search: string) => {
                  try {
                        const movies = await API.fetchMovies(search, 1)
                        setMovies(movies)
                  } catch (error) {
                        console.log(error)
                  }
            }, []
      )

      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value)
      }

      //Fetch search results
      useEffect(() => {
            fetchMovies(searchTerm)
      }, [fetchMovies, searchTerm]) 

      return (
            <Wrapper>
                  <SearchBackground>
                        <Search>
                        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search movies..."/>
                  {movies?.Search && movies?.Search.map((movie) => {
                        return <div>{movie.Title}</div>
                  })}
                        </Search>
                  </SearchBackground>
                  
            </Wrapper>
      )
}

export default Home
