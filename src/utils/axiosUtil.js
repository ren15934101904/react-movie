import axios from 'axios';
import qs from 'qs';


/* 
请求拦截器
use：接受两个参数（都是函数）
    参数一：拦截成功的回调
        形参req就是拦截的数据，return后面的值，就是传递给后台的数据
    参数二：拦截失败的回调
*/

axios.interceptors.request.use((req)=>{
    //在这里对拦截的数据做若干处理
    console.log('req',req);
    //为接口统一添加token
    const token = localStorage.getItem("token");
    if(token){
        req.headers.auth = token;//注意：headers上的属性，要根据后台来，不一定是auth
    }
    /* 
        当请求方式是post的时候，后台有时拿不到参数，如何解决？？(没有遇到就不需要处理)
            一、后台解决
            二、前端解决
                当我们发现是post请求的时候，用qs.stringify去包装一下参数即可
    */
   if(req.method === 'post'){
       req.data = qs.stringify(req.data);
   }

    return req;
},err=>Promise.reject(err));


/* 
响应拦截器
*/
axios.interceptors.response.use((res)=>{
    console.log('拦截器-res',res);
    //作用一：过滤数据，只把前端所需要的数据给到前端
    //作用二：可以在第二个回调函数做错误的统一处理，例如根据状态码，提供不同的提示信息
    return res.data;
},err=>Promise.reject(err));