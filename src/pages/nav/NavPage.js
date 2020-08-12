import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Home from './home/Home';
import Top from './top/Top';
import My from './my/My';

export default class NavPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabBarList: [
                { id: 0, title: '首页', icon: "icon-shouye",  },
                { id: 1, title: '榜单', icon: "icon-bangdan",  },
                { id: 2, title: '我的', icon: "icon-my",  },
            ],
            selectedTab: 0,
        };
    }

    renderContent(id) {
        switch (id) {
            case 0:
                return <Home />
            case 1:
                return <Top />
            case 2:
                return <My />;
            default:
                return <Home />
        }
    
    }

    render() {
        const { tabBarList, selectedTab } = this.state;
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"//未选中的字体颜色
                    tintColor="green"//选中的字体颜色
                    barTintColor="white"//	tabbar 背景色
                >
                    {
                        tabBarList.map((item) => {
                            return (
                                <TabBar.Item
                                    title={item.title}
                                    key={item.id}
                                    icon={<i className={`iconfont ${item.icon}`} style={{ fontSize: 25 }}></i>}
                                    selectedIcon={<i className={`iconfont ${item.icon}`} style={{ fontSize: 25, color: 'green' }}></i>
                                    }
                                    selected={selectedTab === item.id}
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: item.id,
                                        });
                                    }}
                                >
                                    {this.renderContent(item.id)}
                                </TabBar.Item>
                            )
                        })
                    }
                </TabBar>
            </div>
        );
    }
}
