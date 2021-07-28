export type Movies = {
      Search: Movie[];
      totalResults: number;
      Response: string;
      Error: string;
};

export type Movie = {
      Title: string;
      Year: number;
      imdbID: string;
      Type: string;
      Poster: string;
};

export type MovieDetails = {
      Title: string;
      Year: string;
      Rated: string;
      Released: string;
      Runtime: string;
      Genre: string;
      Director: string;
      Writer: string;
      Actors: string;
      Plot: string;
      Language: string;
      Country: String;
      Awards: string;
      Poster: string;
      Ratings: Rating[];
      Metascore: string;
      imdbRating: string;
      imdbVotes: string;
      imdbID: string;
      Type: string;
      DVD: string;
      BoxOffice: string;
      Production: string;
      Website: string;
      Response: string;
};

export type Rating = {
      Source: string;
      Value: string;
};
