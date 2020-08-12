import axios from 'axios';


//登录接口
/* export const loginApi = (params)=>{
   return axios.post(`/users/login`, params)
} */
export const loginApi = (params) => axios.post(`/users/login`, params)


/* loginApi()
.then()
.catch() */