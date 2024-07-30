import axios from "axios"

const apiKey = process.env.REACT_APP_KEY
const baseURL = process.env.REACT_APP_BASEURL

// Fungsi untuk mendapatkan daftar film populer
export const getMovieList = async () => {
    const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}

// Fungsi untuk mendapatkan daftar orang yang trending
// timeWindow: parameter opsional untuk menentukan jangka waktu (default: 'day')

export const getPeople = async (timeWindow = 'day') => {
    const people = await axios.get(`${baseURL}/trending/person/${timeWindow}?api_key=${apiKey}`)
    return people.data.results
}

// Contoh penggunaan:
// getMovieList().then(movies => console.log(movies));

// getPeople('week').then(people => console.log(people));\