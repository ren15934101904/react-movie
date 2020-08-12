import axios from 'axios';

//热门电影
export const getHotMoviesApi = (params={start:0,count:20})=>axios.get(`/movies/hot?start=${params.start}&count=${params.count}`)

//即将上映
export const getComingMoviesApi = (params={start:0,count:20})=>axios.get(`/movies/coming?start=${params.start}&count=${params.count}`,);

