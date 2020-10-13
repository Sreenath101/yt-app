import axios from 'axios'

const KEY = 'AIzaSyBPnorI8jNeRWT6zQ8h_BOAM6fAkFT07lk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})