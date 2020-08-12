import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class MovieItem extends Component {
    static defaultProps = {
        item: {},
    }
    static propTypes = {
        item: PropTypes.object,
    }
    renderStar = () => {
        const { stars } = this.props.item;
        if(!stars)return null;
        const arr = [];
        for (let i = 0; i < stars[0]; i++) {
            arr.push(<i key={i} className="iconfont icon-star" style={{ color: 'yellow', fontSize: 14 }} />);
        }
        if (stars[1] === '5') {
            arr.push(<i key={6} className="iconfont icon-half-star" style={{  fontSize: 14 }} />);
        }
        return arr;

    }
    render() {
        const { movieImg, title, average } = this.props.item;
        return (
            <div style={{ marginRight: 10, width: 100 }}>
                <img style={{ width: 100, height: 120 }} alt="" src={movieImg} />
                <div style={{textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap'}}>{title}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        {this.renderStar()}
                    </div>
                    {average}
                </div>
            </div>
        )
    }
}
