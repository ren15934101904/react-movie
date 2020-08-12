import React from 'react';
// import { HashRouter, Switch, Route } from 'react-router-dom';
/* import NavPage from './pages/nav/NavPage';
// import Login from './pages/login/Login';
import List from './pages/list/List';
// import ListRedux from './pages/list/ListRedux';
import Detail from './pages/detail/Detail';
import Forgot from './pages/forgot/Forgot';
//redux注入数据 */
import { Provider } from 'react-redux';
import store from './store/store';
import MyRouter from './router/MyRouter';
// import Loadable from 'react-loadable';

// const MyLogin = Loadable({
//   loader: () => import(/*webpackChunkName:'login'*/'./pages/login/Login'),
//   loading: () => <div>组件正在加载...</div>
// });
// const ListRedux = Loadable({
//   loader: () => import(/*webpackChunkName:'listRedux'*/'./pages/list/ListRedux'),
//   loading: () => <div>组件正在加载...</div>
// });

/* 
react中如何实现路由懒加载
  注意：如果要用懒加载，千万不要在顶部引入，要做懒加载效果的组件，否则，懒加载会失效
  安装依赖 react-loadable
*/

function App() {
  return (
    <Provider store={store}>
      {/*       <HashRouter>
        <Switch>
          <Route path="/" exact component={NavPage} />
          <Route path="/login" component={MyLogin} />
          <Route path="/list/:title" component={ListRedux} />
          <Route path="/detail" component={Detail} />
          <Route path="/forgot" component={Forgot} />
        </Switch> 
      </HashRouter> */}
      <MyRouter />
    </Provider>

  );
}

export default App;
