import React, { Component } from 'react'
import { ActivityIndicator } from 'antd-mobile'
import MovieItem from '../../components/movieItem/MovieItem';
import './list.scss';
import { getHotMoviesApi, getComingMoviesApi } from '../../apis/movies';
import BScroll from 'better-scroll';


/* 
1. 获取数据，渲染界面

2. 下拉刷新（better-scroll如何监听下拉刷新----参照文档）
    1. 监听下拉事件：this.scroll.on('pullingDown', this.pullingDown);
    2. 下拉事件处理函数里面:
        1. 重置转态
        2. 发接口拿数据，渲染界面

3. 上拉加载更多
*/

export default class List extends Component {
    state = {
        list: [],
        count: 20,
        start: 0,
        total: 1,
        freshLoading: false,
        loadMoreLoading:false,
    }
    componentDidMount() {
        const wrapper = document.querySelector('.list-wrapper');
        this.scroll = new BScroll(wrapper, {
            pullDownRefresh: true,//激活下拉刷新
            pullUpLoad:true,

        });
        //监听下拉事件
        /* 
            参数一：事件名称
            参数二：事件处理函数
        */
        this.scroll.on('pullingDown', this.pullingDown);
        this.scroll.on('pullingUp', this.pullingUp);
        this.getMovies();
    }
    pullingDown = () => {
        console.log('pullingDown')
        /* 
        重置状态之后，在发接口那后台数据
        */
        this.setState({
            list: [],
            start: 0,
            total: 1,
            freshLoading: true
        }, () => {
            //等到数据重置之后在去调用接口
            this.getMovies()
                .then(() => {
                    this.setState({ freshLoading: false });
                    this.scroll.finishPullDown()//通知better-scroll结束下拉动作
                })
                .catch(() => {
                    this.setState({ freshLoading: false });
                    this.scroll.finishPullDown()//通知better-scroll结束下拉动作
                })

        });


        // this.scroll.finishPullDown()//结束下拉动作
    }
    pullingUp = ()=>{
        console.log('pullingUp');
        this.setState({loadMoreLoading:true});
        this.getMovies()
        .then(()=>{
            this.setState({loadMoreLoading:false});
            this.scroll.finishPullUp();
        })
        .catch(()=>{
            this.setState({loadMoreLoading:false});
            this.scroll.finishPullUp();
        })
        
       
    }
    getMovies = () => {
        const title = this.props.match.params.title;
        const api = title === '影院热映' ? getHotMoviesApi : getComingMoviesApi;
        const params = {
            start: this.state.start,
            count: this.state.count,
        }
        if(this.state.list.length >= this.state.total)return Promise.resolve();
        return api(params)
            .then((res) => {
                const { rows, start, total } = res;
                this.setState({
                    list: [...this.state.list, ...rows],
                    start: start + this.state.count,
                    total: total,
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        console.log('this.props',this.props)
        const { list, total,freshLoading ,loadMoreLoading} = this.state;

        return (
            <div style={{ height: '100%' }}>
                {
                    freshLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40 }}> <ActivityIndicator /></div>
                }

                <div className="list-wrapper">

                    <div className="list">
                        {
                            list.map((item) => <MovieItem item={item} key={item.id} />)
                        }

                    </div>
                </div>
                {
                    loadMoreLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40 }}> <ActivityIndicator /></div>
                }
                {
                    list.length >=total && <div style={{textAlign:'center',padding:20}}>数据已经加载完毕</div>
                }
            </div>

        )
    }
}
