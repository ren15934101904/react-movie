import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import './rowList.scss';
import MovieItem from '../../../../components/movieItem/MovieItem';
import BScroll from 'better-scroll';
import PropTypes from 'prop-types';
import { getHotMoviesApi, getComingMoviesApi } from '../../../../apis/movies';

class RowList extends Component {
    /* 给属性值设置默认值 */
    static defaultProps = {
        title: '影院热映',
        index: 0,
    }
    /* 
    约束属性值的类型 
        需要安装依赖 yarn add prop-types
    */
    static propTypes = {
        //key(属性名):value（属性类型）
        title: PropTypes.string,
        index: PropTypes.number,
    }
    state = {
        rows: [],
    }
    componentDidMount() {
        let wrapper = document.querySelector(`#row-list-boby-container${this.props.index}`)
        new BScroll(wrapper, {
            scrollX: true,
            scrollY: false,
        })
        this.getMovies();
    }
    //获取电影列表的数据
    getMovies = () => {

        const api = this.props.title === '影院热映' ? getHotMoviesApi : getComingMoviesApi;
        api()
            .then((res) => {
                console.log('res', res);
                this.setState({ rows: res.rows });
            })
            .catch((err) => {
                console.log('err', err);
            })

    }
    goToList = () => {

        this.props.history.push(`/list/${this.props.title}`);
    }
    render() {
        const { index, title } = this.props;
        const { rows } = this.state;
        return (
            <div className="row-list">
                <div className="row-list-header" onClick={this.goToList}>
                    <div>{title}</div>
                    <div style={{ color: 'green' }}>查看更多 <i className="iconfont icon-552cc1babd9aa" /></div>
                </div>
                <div id={`row-list-boby-container${index}`} className="row-list-boby-container">
                    <div className="row-list-body">
                        {
                            rows.map((item) => <MovieItem item={item} key={item.id} />)
                        }


                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(RowList);
