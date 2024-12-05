import axios from 'axios';
import { create } from 'zustand';

export interface MovieItem {
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
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
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
}

// Define the store's state and actions
interface MovieStore {
  items: MovieItem[];          
  searchedItems: MovieItem[];
  imdbMovie: MovieItem | null;
  fetchItems: (imdbID: string) => Promise<void>;
  searchMovie: (query: string) => Promise<void>;
}

// Define the store
const useMovieStore = create<MovieStore>((set) => ({
  items: [],
  searchedItems: [],  // Initializing the searchedItems state
  imdbMovie: null,
  fetchItems: async (imdbID) => {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=148d83e8`;
    try {
      const response = await axios.get<MovieItem>(url);
      console.log('API Response:', response.data); // Debug the API response
      set({ items: [response.data] }); // Set the fetched movie data to state
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  },

  // Search for movies by query
  searchMovie: async (query: string) => {
    const url = `https://www.omdbapi.com/?s=${query}&apikey=148d83e8`;
    try {
      const response = await axios.get<{ Search: MovieItem[] }>(url);
      console.log('Search Response:', response.data); // Debug the search response
      if (response.data.Search) {
        set({ searchedItems: response.data.Search }); // Store search results in state
      } else {
        set({ searchedItems: [] }); // Clear results if none found
      }
    } catch (error) {
      console.error('Failed to search movies:', error);
    }
  },
}));

export default useMovieStore;
