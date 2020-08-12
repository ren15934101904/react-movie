import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {getHotMoviesApi,getComingMoviesApi} from '../apis/movies';



export default createStore(reducer,applyMiddleware(thunk,logger));

/* 
什么是redux中间件：
    你可以把中间件理解为强化dispatch的一系列方法
    dispatch开始----->-中间件1---中间件2----中间件3--->----reducer执行

    常用中间件：
        redux-thunk-----让dispatch方法可以接受一个函数
        redux-logger----当我们dispatch的时候，可以答应数据变化前后的日志，方便我们观察数据的变化



*/


function reducer(state = {
    list: [],
    count: 20,
    start: 0,
    total: 1,
    freshLoading: false,
    loadMoreLoading: false,
}, action) {
    switch (action.type) {
        case 'loadList':
            return {
                ...state,
                list: [...state.list, ...action.rows],
                start: state.start + state.count,
                total: action.total,
            }
        case 'resetData':
            return {
                ...state,
                list: [],
                start: 0,
                total: 1,
            }
        case 'freshLoadingControll':
            return {
                ...state,
                freshLoading:action.loading,
            }
        case 'loadMoreLoadingControll':
            return {
                ...state,
                loadMoreLoading:action.loading
            }
        default: return state;
    }
}


//改变list数据
export const loadListAC = ({ rows, start, total }) => ({
    type: "loadList",
    rows, start, total
})
//重置数据
export const resetDataA = {
    type: 'resetData',
}
//控制下拉刷新的loading
export const freshLoadingControllAC = (loading)=>({
    type:'freshLoadingControll',
    loading,
})
//控制上拉加载更多的loading
export const loadMoreLoadingControllAC = (loading)=>({
    type:'loadMoreLoadingControll',
    loading,
})


/* 
参数一：dispatch---store下面的dispatch方法,用于修改数
参数二：getState---获取当前store的数据
*/
export const getMovies =(title)=> (dispatch,getState)=>{
    // const title = this.props.match.params.title;
        const api = title === '影院热映' ? getHotMoviesApi : getComingMoviesApi;
        const {start,count,list,total} = getState();
        const params = {
            start,
            count,
        }
        if(list.length >= total)return Promise.resolve();
        return api(params)
            .then((res) => {
                // const { rows, start, total } = res;
                dispatch(loadListAC(res));
              /*   this.setState({
                    list: [...this.state.list, ...rows],
                    start: start + this.state.count,
                    total: total,
                }); */
            })
            .catch((err) => {
                console.log(err);
            })
}

// dispatch(getMovies(title))
