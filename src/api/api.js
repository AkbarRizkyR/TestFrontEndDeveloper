import axios from "axios"

const apiKey = process.env.REACT_APP_KEY
const baseURL = process.env.REACT_APP_BASEURL


export const getMovieList = async () => {
    const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}
export const getPeople = async (timeWindow = 'day') => {
    const people = await axios.get(`${baseURL}/trending/person/${timeWindow}?api_key=${apiKey}`)
    return people.data.results
}
