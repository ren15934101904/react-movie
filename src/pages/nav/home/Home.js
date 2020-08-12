import React, { Component } from 'react'
import RowList from './components/RowList';
import './home.scss';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="search-wrapper">
                    <div className="search-box">
                        <i className="iconfont icon-search"/> 搜索
                    </div>
                </div>
                {/* 电影列表 */}
                <RowList title="影院热映" index={0}/>
                <RowList title="即将上映" index={1}/>
                <RowList title="近期热门剧集" index={2}/>

            </div>
        )
    }
}
